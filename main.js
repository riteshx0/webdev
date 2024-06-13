
let blogCount = 0;

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  
  // the object made from input field values 
  const imageDetails = {
    imageUrl: event.target.imageUrl.value,
    imageTitle: event.target.imageTitle.value,
    imageDescription: event.target.imageDescription.value,
  };
  
  // post request for every new post createadd
  axios
    .post(
      "https://crudcrud.com/api/915a3762f9f84d23a9a658a8c27a5459/images",
      imageDetails
    )
    .then((response) => {
      // response is a simple object 
      displayUserOnScreen(response.data);
      // incrementing the blog count
      updateBlogCount(1)
      clearForm();
    })
    .catch((error) => {
      showError(error);
    });
}

// Function to clear the form fields
function clearForm() {
  document.getElementById("url").value = "";
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}

// Function to display image details on screen
function displayUserOnScreen(imageDetails) {
  const imageItem = document.createElement("li");
  // 3 post on every row 
  imageItem.classList.add("col-md-4", "mb-4", "blog-post");

  const titleOfImage = document.createElement("h4");
  titleOfImage.innerText = imageDetails.imageTitle;

  const img = document.createElement("img");
  img.src = imageDetails.imageUrl;
  // 100% width of image compare to parent element
  img.classList.add("img-fluid")

  const descriptionOfImage = document.createElement("p");
  descriptionOfImage.innerText = imageDetails.imageDescription;

  imageItem.appendChild(titleOfImage);
  imageItem.appendChild(img);
  imageItem.appendChild(descriptionOfImage);
  
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger";
  deleteBtn.appendChild(document.createTextNode("Delete"));
  deleteBtn.classList.add("btn-danger");  
  imageItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.className = "btn btn-primary";
  editBtn.appendChild(document.createTextNode("Edit"));
  editBtn.classList.add("btn-primary");
  imageItem.appendChild(editBtn);

  const imageList = document.querySelector("ul");
  // newly added post on top of page
  imageList.insertBefore(imageItem,imageList.firstChild);

  deleteBtn.addEventListener("click", function () {
    handleDelete(imageDetails._id, imageItem);
  });

  editBtn.addEventListener("click", function () {
    document.getElementById("url").value = imageDetails.imageUrl;
    document.getElementById("title").value = imageDetails.imageTitle;
    document.getElementById("description").value = imageDetails.imageDescription;
    
    handleDelete(imageDetails._id, imageItem);
  });
}

// Function to handle deletion of image details
function handleDelete(imageId, imageItem) {
  axios.delete(`https://crudcrud.com/api/915a3762f9f84d23a9a658a8c27a5459/images/${imageId}`)
    .then(() => {
      const imageList = document.querySelector("ul");
      imageList.removeChild(imageItem);
      updateBlogCount(-1)
    })
    .catch((err) => {
      showError(err);
    });
}

// Function to show errors
function showError(error) {
  console.log(error);
  document.body.innerHTML += "<h4>An error occurred</h4>";
}
// blog count update
function updateBlogCount(change) {
  blogCount += change;
  document.getElementById("blogCount").innerText = `Number of Blogs: ${blogCount}`;
}

// Load existing blog posts from the database
window.addEventListener("DOMContentLoaded", function () {
  axios.get("https://crudcrud.com/api/915a3762f9f84d23a9a658a8c27a5459/images")
    .then((response) => {
      response.data.forEach((imageDetails) => {
        displayUserOnScreen(imageDetails);
      
      });
      blogCount = response.data.length;
      updateBlogCount(0)
    })
    .catch((error) => {
      console.log(error);
    });
});

function handleFormSubmit(event) {
  event.preventDefault();
  const userDetails = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };
  axios
    .post(
      "https://crudcrud.com/api/48674422bf3342e6a6466b71f7cd5c2f/todo",
      userDetails
    )
    .then((obj) => displayUserOnScreen(obj.data))
    .catch((error) => console.log(error));

  // Clearing the input fields
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}


// after post , get, delete,edit this runs 
function displayUserOnScreen(userDetails) {
  const userItem = document.createElement("li");
  userItem.classList.add(userDetails._id)
  userItem.appendChild(
    document.createTextNode(
      `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    )
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  userItem.appendChild(editBtn);

  const userList = document.querySelector("ul");
  userList.appendChild(userItem);

  deleteBtn.addEventListener("click", function (event) {
    axios.delete(`https://crudcrud.com/api/48674422bf3342e6a6466b71f7cd5c2f/todo/${userDetails._id}`)
    userList.removeChild(event.target.parentElement);
   
  });

  editBtn.addEventListener("click", function (event) {
    // BY Using id after the endpoint  the object is returned from get request
   axios.get(`https://crudcrud.com/api/48674422bf3342e6a6466b71f7cd5c2f/todo/${userDetails._id}`).then((response)=>{
    document.getElementById("username").value = response.data.username;
    document.getElementById("email").value = response.data.email;
    document.getElementById("phone").value = response.data.phone;
    axios.delete(`https://crudcrud.com/api/48674422bf3342e6a6466b71f7cd5c2f/todo/${userDetails._id}`)
    userList.removeChild(event.target.parentElement);
   })
   .catch((error)=>{console.log(error)
   })
    
  });
}

/// for page refresh

window.addEventListener("DOMContentLoaded", function(event) {
   // BY Using directly endpoint the Array is returned from get request
  axios.get("https://crudcrud.com/api/48674422bf3342e6a6466b71f7cd5c2f/todo")
  .then((Array)=>{
    Array.data.forEach((userDetails) => {
      displayUserOnScreen(userDetails);
    });})
    .catch((error)=>{
    console.log(error)
  })
});





















// Do not touch code below













// const timer1 = setTimeout(() => {

//   console.log('timer1');

  

//   const promise1 = Promise.resolve().then(() => {

//     console.log('promise1')

//   })

// }, 0)



// const timer2 = setTimeout(() => {

//    console.log('timer2')

// }, 0)




// if true form will be submitted and will get refreshed 
// if false form will not be submitted 
//  after first submission was-validated class will be added 


// const form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
// if(!form.checkValidity()){
// event.preventDefault();
// console.log('form not submitted')
// }
// else {
//   console.log('form submitted')
// }
// form.classList.add('was-validated')


// });
































//   function handleFormSubmit(event) {
//     event.preventDefault();

//     const amount = event.target.expenseamount.value;
//     const description = event.target.expensedescription.value;
//     const category = event.target.expensecategory.value;  

//     const users = document.querySelector('.users');
//     const user = document.createElement('li');
//     user.textContent = `${amount} - ${description} - ${category}`;  

//     const editBtn = document.createElement('button');
//     editBtn.className = 'edit-btn';
//     editBtn.textContent = 'Edit Expense';
//     editBtn.id = description;
//     user.appendChild(editBtn);

//     const deleteBtn = document.createElement('button');
//     deleteBtn.className = 'delete-btn';
//     deleteBtn.textContent = 'Delete Expense';
//     deleteBtn.id = description;
//     user.appendChild(deleteBtn);

//     users.appendChild(user);

//     const obj = {
//         'expenseamount': amount,
//         'expensedescription': description,
//         'expensecategory': category  
//     };
//     const data = JSON.stringify(obj);
//     localStorage.setItem(obj.expensedescription, data);  

    
//     document.querySelector('.users').addEventListener('click', function(event) {
//         const key = event.target.id;

//         if (event.target.classList.contains('edit-btn')) {
//             const liElement = event.target.parentElement;
//             if (liElement && liElement.tagName === 'LI') {
//                 const userDataString = localStorage.getItem(key);
//                 if (userDataString) {
//                     const userData = JSON.parse(userDataString);
                    
//                     document.getElementById('expenseamount').value = userData.expenseamount;
//                     document.getElementById('expensedescription').value = userData.expensedescription;  
//                     document.getElementById('expensecategory').value = userData.expensecategory;
//                 }
//                 liElement.remove();

//                 localStorage.removeItem(key);
//             }
//         } else if (event.target.classList.contains('delete-btn')) {
//             const liElement = event.target.parentElement;
//             if (liElement && liElement.tagName === 'LI') {
//                 liElement.remove();
//                 localStorage.removeItem(key);
//             }
//         }
//     });


//     event.target.expenseamount.value = ''; 
//     event.target.expensedescription.value = '';  
//     event.target.expensecategory.value = ''; 
// }

//

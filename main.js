
// if true form will be submitted and will get refreshed 
// if false form will not be submitted 
//  after first submission was-validated class will be added 


const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
if(!form.checkValidity()){
event.preventDefault();
console.log('form not submitted')
}
else {
  console.log('form submitted')
}
form.classList.add('was-validated')


});
































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

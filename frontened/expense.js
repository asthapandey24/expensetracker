function saveinLocalStorage(event){
    event.preventDefault();
    const expense = event.target.expense.value;
    const discription = event.target.discription.value;
    const category = event.target.category.value;
    const myObj = {
        expense,
        discription,
        category
    }



    axios.post(`http://localhost:7000/expensetable/add-user`,myObj )
     .then((response)=>{
        displayUser(myObj)
        console.log(response) 
     })
     .catch((err)=>{
        document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong </h4>"
        console.log(err)
     })


   // localStorage.setItem( myObj.discription, JSON.stringify(myObj));

    //displayUser(myObj)


}


 window.addEventListener('DOMContentLoaded', (event) => { 
    axios.get(`http://localhost:7000/expensetable/get-user`)
    // interview question 
    // const data = axios.get("https://crudcrud.com/api/49efc82b0e5644908d91615fb6292b23/ExpenseData  ")
       .then((response) =>{
        console.log(response)
        for(var i=0; i< response.data.details.length; i++){
            displayUser(response.data.details[i])
        }
       })
       .catch((error)=>{
         console.log(error)
       })
       // console.log(data)(javascript waits for none it will give Promise but not a data )(concept of event loop )
   //  Object.keys(localStorage).forEach(key => {
       // const user = JSON.parse(localStorage.getItem(key))
       // addNewLineElement(user)
      // displayUser(user);
    //})
   // console.log(user.id)
});    


function displayUser(details){
 
    // document.getElementById('expense').value = '',
    // document.getElementById('discription').value = '',
    // document.getElementById('category').value = ''

 const parentNode = document.getElementById('Users');
 const childHTML = `<li id = ${details.id} >${details.expense} - ${details.discription} - ${details.category}
 <button onClick = deleteUser('${details.id}')>Delete</button>
<button onclick = edituser('${details.id}','${details.expense}','${details.discription}')>Edit</button> </li>`

 parentNode.innerHTML = parentNode.innerHTML + childHTML;



 }


 function deleteUser(userId){
      axios.delete(`http://localhost:7000/expensetable/delete-user/${userId}`)
      .then((response)=>{
        removeItemfromScreen(userId);
        console.log(response)
      })
    .catch((err)=>{
        console.log(err)
    })

     //localStorage.removeItem(discription);
    //removeItemfromScreen(id)
 }


 function removeItemfromScreen(userId){
      

    //const parentNode = document.getElementById('Users')
    const elem = document.getElementById(userId)
     parentNode.removeChild(elem)

 }



 function edituser(userId,expense,discription){
  document.getElementById('id1').value = discription
  document.getElementById('id0').value = expense

   deleteUser(userId)
 }



// DOMCONTENTLOADED(Why do we need it)
// the main use of this is that when once HTML is loaded on screen then script will run 

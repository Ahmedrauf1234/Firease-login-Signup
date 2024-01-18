import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./config.js";
//=====================getting elements document======================>>
const email = document.querySelector('#email');
const password = document.querySelector('#pass');
const form = document.querySelector('#form');
//=================================End=============================>>
form.addEventListener('submit', (event)=>{
    event.preventDefault()
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => { 
    const user = userCredential.user;
    // console.log(user.email);
    window.location = 'welcome.html'
    localStorage.setItem('items',user.email)
    password.value = ''
  })
  .catch((error) => {
    const errorMessage = error.message;
    Swal.fire({
        icon: "error",
        title: "Invalid Email Password"
      });
    
  });
 

})
//=======================Forgot password=========================>>
const forgot = document.querySelector('#forgot');
forgot.addEventListener('click', ()=>{
    window.location = 'forgot.html'
})
import {  sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./config.js";

const email = document.querySelector('#email');
const form = document.querySelector('#form');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    sendPasswordResetEmail(auth, email.value)
  .then(() => {
    // console.log('password reset');
    Swal.fire({
        title: "Check Your mail",
        icon: "success"
      });
      email.value = ''
      setTimeout(function(){
        window.location = 'index.html'
      },2000)
      
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire("Enter Correct Email");
    console.log(errorMessage);
  });
})
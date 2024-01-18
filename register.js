import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./config.js";

//==============================Getting elements document====================>>
const email = document.querySelector('#email');
const password = document.querySelector('#pass');
const form = document.querySelector('#form');
//==================================End===========================>>
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    // console.log(email.value);
    // console.log(password.value);
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => { 
    const user = userCredential.user;
    console.log(user.email);
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "You are registered",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(function(){
        window.location = 'index.html'
      },2000)
      email.value = ''
      password.value = ''
  })
  .catch((error) => {
    const errorMessage = error.message;
    Swal.fire("This Email already in used");
    email.value = ''
    password.value = ''
    
  });

})

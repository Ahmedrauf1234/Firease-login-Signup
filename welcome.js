import { signOut  , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./config.js";
//===========================onauth state change==============>>
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       console.log(uid);
//     } else {
//       window.location = 'index.html'
//     }
//   });
//============================End=========================>>

let getItem = localStorage.getItem('items');
console.log(getItem);
const span = document.querySelector('#span');
span.innerHTML = getItem

//=============================Main work====================>>
const logoutBtn = document.querySelector('#btn');
logoutBtn.addEventListener('click',()=>{
    signOut(auth).then(() => {
        Swal.fire({
            title: "Logout Sucessfully",
            icon: "success"
          });
        setTimeout(function(){
            window.location = 'index.html'
        },2000)
      }).catch((error) => {
        alert("Wait something Error")
      });
      
})
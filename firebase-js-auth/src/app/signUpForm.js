import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signUpForm = document.getElementById("signup-form")

signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault()

   const email = signUpForm['signup-email'].value
   const password = signUpForm['signup-password'].value

   try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email,password)
    console.log(userCredentials)
   const signupModal = document.getElementById("signupModal")
   const modal = bootstrap.Modal.getInstance(signupModal)
   modal.hide()

   showMessage("Welcome " + userCredentials.user.email, "success")

   } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
        showMessage("Email already in use", "error")
      } else if (error.code === 'auth/invalid-email') {
        showMessage("Invalid email", "error")
      } else if (error.code === 'auth/weak-password') {
        showMessage("Weak password", "error")
      } else if (error.code) {
        showMessage("Something went wrong", "error")
      }
   }
})
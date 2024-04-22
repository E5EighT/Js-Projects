import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.getElementById("signin-form")

signInForm.addEventListener("submit", async (e) => {
    e.preventDefault()

  const email =  signInForm["signin-email"].value
   const password = signInForm["signin-password"].value

  try {
    const userCredentials = await signInWithEmailAndPassword(auth,email,password)
    console.log(userCredentials)
    const signinModal = document.getElementById("signinModal")
    const modal = bootstrap.Modal.getInstance(signinModal);
    modal.hide();
    showMessage("Welcome " + userCredentials.user.email, "success")

} catch (error) {
    if (error.code === 'auth/wrong-password') {
        showMessage("Wrong password", "error")
      } else if (error.code === 'auth/user-not-found') {
        showMessage("User not found", "error")
      } else {
        showMessage("Something went wrong", "error")
      }
  }
})
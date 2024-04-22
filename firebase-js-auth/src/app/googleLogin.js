import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleBtn = document.getElementById("googleLogin")

googleBtn.addEventListener("click", async () => {

   const provider = new GoogleAuthProvider()

  try {
    const userCredentials = await signInWithPopup(auth, provider)
    console.log(userCredentials)
    const signinModal = document.getElementById("signinModal")
    const modal = bootstrap.Modal.getInstance(signinModal);
    modal.hide();
    showMessage("Welcome " + userCredentials.user.displayName, "success")
  } catch (error) {
     console.log(error)
  }

})
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"
import { auth, db } from "./app/firebase.js"
import { getDocs,collection } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js"
import {loginCheck} from  "./app/loginCheck.js"


import "./app/signUpForm.js"
import "./app/signInForm.js";
import "./app/googleLogin.js";
import "./app/logout.js"
import {loadPosts} from "./app/postLists.js"

onAuthStateChanged(auth, async (user) => {
   if(user) {
    loginCheck(user)
   const res = await getDocs(collection(db, 'posts'))
   loadPosts(res.docs)
    } else {
    loginCheck(user)
    }

})

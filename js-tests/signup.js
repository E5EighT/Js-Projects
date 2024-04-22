document.addEventListener("DOMContentLoaded", () => {
   const formSignUp = document.querySelector(".form-signup")
   const usernameInput =  document.getElementById("username")
   const emailInput =  document.getElementById("email")
   const passwordInput =  document.getElementById("password")
   const resText = document.getElementById("res-text")

   formSignUp.addEventListener("submit", (e) => {
    e.preventDefault()
   const username = usernameInput.value
   const email = emailInput.value
   const password = passwordInput.value
   
   const error = validator(username,email,password)

   if (error) {
    resText.innerHTML = error
    resText.style.color = "red"
   } else {
    resText.textContent = "thanks"
    resText.style.color = "green"
    localStorage.setItem("username", username)
    window.location.href = "dashboard.html"
   }

   function validator(username,email,password) {
    let error = "";
       if(username.length < 5) {
          return error = "Username must be at least 5 characters."
       } else if (email.length < 5 || !email.includes("@")) {
           return error = "Invalid email"
       } else if (password.length < 5) {
        return error = "Password must be at least 5 characters"
       }
       return
   }

   })

})
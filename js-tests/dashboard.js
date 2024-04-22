const welcomeText = document.getElementById("welcome-text")

const username = localStorage.getItem("username")

if (username) {
    welcomeText.textContent = "Welcome " + username
} else {
    window.location.href = "signup.html"
}
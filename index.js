document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginBtn").addEventListener("click", function() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username === "admin" && password === "2512") {
            window.location.href = "login-1.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop page refresh

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
		
		console.log("Username:", username);
        console.log("Password:", password);

        if (username === "UnknownSofie" && password === "SofieWasHere") {
            window.location.href = "C:/Users/Linnaeus/Documents/PAGARAN_LINNAEUS/3RD%20QUARTER/Homepage.html"; // Redirect file
        } else {
            alert("Incorrect username or password");
        }

    });

});
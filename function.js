document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault(); // prevents page refresh

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username !== "" && password !== ""){
        
        document.body.innerHTML = `
        <div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:Arial;">
            <h2>Logging in...</h2>
        </div>
        `;

        setTimeout(function(){
            window.location.href = "homepage.html";
        },1500);

    }
});

/* SAVED ACCOUNT */ const savedUsername = "Sofia"; const savedPassword = "12345"; const loginForm = document.getElementById("loginForm"); const forgotPassword = document.getElementById("forgotPassword"); const showAccount = document.getElementById("showAccount"); /* LOGIN FUNCTION */ loginForm.addEventListener("submit", function(e){ e.preventDefault(); const username = document.getElementById("username").value; const password = document.getElementById("password").value; if(username === savedUsername && password === savedPassword){ document.body.innerHTML = "<h2 style='text-align:center;margin-top:20%;font-family:Arial;'>Logging in...</h2>"; setTimeout(function(){ window.location.href = "https://pagaransofiatrinity-design.github.io/myportfolio3/"; },1500); } else { alert("Incorrect username or password."); } }); /* FORGOT PASSWORD */ forgotPassword.addEventListener("click", function(e){ e.preventDefault(); alert("Your password is: " + savedPassword); }); /* SHOW ACCOUNT INFO */ showAccount.addEventListener("click", function(e){ e.preventDefault(); alert("Demo Account\n\nUsername: " + savedUsername + "\nPassword: " + savedPassword); });


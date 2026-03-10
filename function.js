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

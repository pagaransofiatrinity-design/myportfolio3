function checkAge() { 
    let age = document.getElementById("age").value; 
 
    if (age === "") { 
        document.getElementById("result").innerHTML = 
        "Please enter your age."; 
    } else if (age >= 18) { 
        document.getElementById("result").innerHTML = 
        "You are eligible to vote."; 
    } else { 
        document.getElementById("result").innerHTML = 
        "You are not eligible to vote."; 
    }  
	
} 
function checkPassword() { 
    let password = 
    document.getElementById("password").value; 
 
    if (password === "") { 
        document.getElementById("message").innerHTML = 
        "Password cannot be empty."; 
    } else if (password === "admin123") { 
        document.getElementById("message").innerHTML = 
        "Access Granted"; 
    } else { 
        document.getElementById("message").innerHTML = 
        "Access Denied"; 
    } 
} 
  
function evaluateGrade() { 
    let grade = 
    document.getElementById("grade").value; 
 
    if (grade === "") { 
        output.innerHTML = "Please enter a grade."; 
    } else if (grade < 0 || grade > 100) { 
        output.innerHTML = 
        "Grade must be between 0 and 100."; 
    } else if (grade >= 90) { 
        output.innerHTML = "Outstanding"; 
    } else if (grade >= 80) { 
        output.innerHTML = "Very Satisfactory"; 
    } else if (grade >= 75) { 
        output.innerHTML = "Failed"; 
    } else { 
        output.innerHTML = 
        "Did Not Meet Expectations"; 
    } 
} 



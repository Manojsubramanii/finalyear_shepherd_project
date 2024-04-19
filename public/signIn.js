<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
</head>
<body>

<h2>Login Form</h2>

<form id="loginForm">
    <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
    </div>
    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
    </div>
    <div>
        <button type="submit">Login</button>
    </div>
</form>

<script>
    // Define user credentials
    var users = [
        { username: "admin", password: "admin123", role: "admin" },
        { username: "student", password: "student123", role: "student" }
    ];

    // Function to handle form submission
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Retrieve username and password values
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Check credentials against stored users
        var authenticatedUser = users.find(function(user) {
            return user.username === username && user.password === password;
        });

        // If user found, log in and redirect
        if (authenticatedUser) {
            alert("Login successful as " + authenticatedUser.role);
            // Redirect to dashboard or any other page based on user role
            if (authenticatedUser.role === "admin") {
                window.location.href = "admin_dashboard.html";
            } else {
                window.location.href = "student_dashboard.html";
            }
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
</script>

</body>
</html>

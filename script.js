document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting immediately

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validate the form
    if (!name || !email || !password) {
        showMessage("All fields are required!", "error");
        return;
    }

    if (!validateEmail(email)) {
        showMessage("Please enter a valid email address.", "error");
        return;
    }

    // Mock submitting data to the server (replace with actual API call)
    const userData = {
        name: name,
        email: email,
        password: password
    };

   

    // Simulate a successful signup
    setTimeout(() => {
        showMessage("Account created successfully!", "success");
        document.getElementById("signup-form").reset(); // Reset form
    }, 1000); // Simulated delay
});

// Email validation function
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// Show success or error message
function showMessage(message, type) {
    const messageElement = document.getElementById("form-message");
    messageElement.textContent = message;
    if (type === "error") {
        messageElement.style.color = "#ff4d4d";
    } else if (type === "success") {
        messageElement.style.color = "#4caf50";
    }
}
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Basic validation
    if (!name || !email || !password) {
        alert("Please fill out all fields.");
        return;
    }

    // Basic email validation (regex)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email.");
        return;
    }

    console.log("Form submitted successfully:", name, email, password);
    // You can then send data to the server or perform further actions.
});
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const formData = {
        name: name,
        email: email,
        password: password
    };

    // Send data to the server using fetch (AJAX)
    fetch('/your-api-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Signup successful!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
});
const bcrypt = require('bcrypt');

// Hash password before saving it to the database
bcrypt.hash(password, 10, (err, hashedPassword) => {
  if (err) throw err;
  // Save hashedPassword to your database
});
then(data => {
    console.log('Success:', data);
    document.getElementById("success-message").style.display = "block";
})
.catch(error => {
    console.error('Error:', error);
    document.getElementById("error-message").style.display = "block";
});






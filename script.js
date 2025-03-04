

document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();


  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // Clear previous error message
  errorMessage.style.display = "none";



  // Validate inputs
  if (!email || !password) {
    errorMessage.textContent = "Please fill in all fields.";
   
    errorMessage.style.display = "block";
    return;
  }
  if (email === "shreyakumari262003@gmail.com" && password === "12345") {
   alert("Login successful!");
    window.location.href = "index.html"; // Redirect to index.html
    return;
  }
 try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect on successful login
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    errorMessage.textContent = error.message;
    errorMessage.style.display = "block";
  }
});

// Show Create Account Modal
document.getElementById("createAccount").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("createAccountModal").style.display = "block";
});

// Close Create Account Modal
document.getElementById("closeCreateAccountModal").addEventListener("click", function () {
  document.getElementById("createAccountModal").style.display = "none";
});

// Handle Create Account logic
document.getElementById("createAccountForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("newEmail").value;
  const password = document.getElementById("newPassword").value;
  const accountCreationMessage = document.getElementById("accountCreationMessage");

  // Clear previous message
  accountCreationMessage.style.display = "none";

  if (!email || !password) {
    accountCreationMessage.textContent = "Please fill in all fields.";
    accountCreationMessage.style.color = "red";
    accountCreationMessage.style.display = "block";
    return;
  }

  // Check if email and password match predefined account creation credentials
  if (email === "shreya@gmail.com" && password === "12345") {
    // Account is created successfully
    accountCreationMessage.textContent = "Account created successfully!.";
    window.location.href = "index.html";
    accountCreationMessage.style.color = "green";
    accountCreationMessage.style.display = "block";
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      accountCreationMessage.textContent = "Account created successfully!.";
      accountCreationMessage.style.color = "green";
      accountCreationMessage.style.display = "block";
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    accountCreationMessage.textContent = error.message;
    accountCreationMessage.style.color = "red";
    accountCreationMessage.style.display = "block";
  }
});

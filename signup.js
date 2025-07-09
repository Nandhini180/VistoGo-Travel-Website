document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulate signup logic
    if (name && email && password) {
      alert("Signup successful! Please login.");
      window.location.href = "login.html";
    } else {
      alert("Please fill in all fields.");
    }
  });

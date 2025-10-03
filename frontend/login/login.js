const loginForm = document.querySelector('.login-box form');
  const userInput = loginForm.querySelector('input[type="text"]');
  const passInput = loginForm.querySelector('input[type="password"]');

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const username = userInput.value.trim();
    const password = passInput.value.trim();

   
    if(username === "admin" && password === "1234") {
      
      localStorage.setItem('loggedIn', 'true');

      
      window.location.href = "../dashboard/dashboard.html";
    } else {
      alert("Invalid username or password!");
    }
  });
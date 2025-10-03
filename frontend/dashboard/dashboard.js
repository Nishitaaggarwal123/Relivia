// Redirect if user is not logged in
if (localStorage.getItem('loggedIn') !== 'true') {
  window.location.href = "../login/login.html";
}

// Dashboard link
document.getElementById('dashboardLink').addEventListener('click', function(e){
  e.preventDefault(); 
  window.location.href = "dashboard.html"; 
});

// Report link
document.getElementById('reportLink').addEventListener('click', function(e){
  e.preventDefault();
  window.location.href = "report.html"; 
});

// Control Panel link
document.getElementById('controlPanelLink').addEventListener('click', function(e){
  e.preventDefault();
  
  window.location.href = "../admin/admin.html";
});
const analyticsLink = document.querySelector('.nav-links a[href="#"]:nth-child(4)'); // 4th link
analyticsLink.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "../analytics/analytics.html"; // link to your analytics page
});


// Logout link
document.getElementById('logoutLink').addEventListener('click', function(e){
  e.preventDefault();
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('role'); 
  window.location.href = "../login/login.html";
});

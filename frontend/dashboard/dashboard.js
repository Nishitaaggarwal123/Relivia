// Redirect if user is not logged in
if (localStorage.getItem('loggedIn') !== 'true') {
  window.location.href = "../login/login.html";
}

// Dashboard link
document.getElementById('dashboardLink').addEventListener('click', function(e){
  e.preventDefault(); 
  window.location.href = "../dashboard.html"; 
});

// Report link
document.getElementById('reportLink').addEventListener('click', function(e){
  e.preventDefault();
  window.location.href = "../report/report.html"; 
});

// Control Panel link
document.getElementById('controlPanelLink').addEventListener('click', function(e){
  e.preventDefault();
  window.location.href = "../admin/admin.html";
});

// Analytics link
document.getElementById('analyticsLink').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "../analytics/analytics.html"; 
});

// Logout link
document.getElementById('loginLink').addEventListener('click', function(e){
  e.preventDefault();
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('role'); 
  window.location.href = "../login/login.html";
});

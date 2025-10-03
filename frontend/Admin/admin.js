// Access control: Redirect if not logged in
if (localStorage.getItem('loggedIn') !== 'true') {
  window.location.href = "../login/login.html"; 
}


if (localStorage.getItem('role') && localStorage.getItem('role') !== 'admin') {
  alert("You do not have permission to access this page.");
  window.location.href = "../dashboard/dashboard.html"; 
}

// Logout button (if you add a logout button in admin panel)
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', function() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('role'); 
    window.location.href = "../login/login.html";
  });
}

// Bulk toggle 
const bulkToggle = document.getElementById('bulk-toggle');
if (bulkToggle) {
  bulkToggle.addEventListener('change', function() {
    if (bulkToggle.checked) {
      alert("Bulk mode activated");
    } else {
      alert("Bulk mode deactivated");
    }
  });
}
const appRequestsContainer = document.querySelector('.sms-list'); 
function loadAppRequests() {
    appRequestsContainer.innerHTML = ''; 
    const requests = JSON.parse(localStorage.getItem('appRequests')) || [];

    requests.forEach(req => {
        const div = document.createElement('div');
        div.className = 'sms-item';
        div.innerHTML = `
            <div class="sms-header">
                <span>${req.name} (${req.contact})</span>
                <span class="status new">${req.priority} - ${req.type}</span>
            </div>
            <div class="sms-message">${req.details}</div>
            <div class="sms-footer">${req.location} | ${req.timestamp}</div>
        `;
        appRequestsContainer.appendChild(div);
    });
}


loadAppRequests();


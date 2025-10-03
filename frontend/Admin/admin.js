/// Access control: Redirect if not logged in
if (localStorage.getItem('loggedIn') !== 'true') {
  window.location.href = "../login/login.html"; 
}

if (localStorage.getItem('role') && localStorage.getItem('role') !== 'admin') {
  alert("You do not have permission to access this page.");
  window.location.href = "../dashboard/dashboard.html"; 
}

// Logout button
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

// Container for all requests (App + SMS)
const appRequestsContainer = document.querySelector('.sms-list'); 

function loadAppRequests() {
    appRequestsContainer.innerHTML = ''; 
    
    // Load App Requests
    const appRequests = JSON.parse(localStorage.getItem('appRequests')) || [];
    appRequests.forEach(req => {
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

    // Load SMS Alerts
    const smsAlerts = JSON.parse(localStorage.getItem('smsAlerts') || '[]');
    smsAlerts.forEach(alert => {
        const div = document.createElement('div');
        div.className = 'sms-item';
        div.innerHTML = `
            <div class="sms-header">
                <span>SMS Alert</span>
                <span class="status new">${alert.timestamp}</span>
            </div>
            <div class="sms-message">${alert.message}</div>
            <div class="sms-footer">${alert.type} | ${alert.location}</div>
        `;
        appRequestsContainer.appendChild(div);
    });
}

// Initial load
loadAppRequests();

// ===== Send SMS Alert =====
const sendBtn = document.querySelector('.btn-primary'); // Send Now button
if (sendBtn) {
    sendBtn.addEventListener('click', () => {
        const alertType = document.querySelector('.panel-card select').value;
        const location = document.getElementById('alert-location').value;
        const message = document.querySelector('.panel-card textarea').value;
        const timestamp = new Date().toLocaleString();

        if (!message) {
            alert("Please enter a message");
            return;
        }

        // Get existing alerts from localStorage
        let smsAlerts = JSON.parse(localStorage.getItem('smsAlerts') || '[]');

        // Add new alert
        smsAlerts.push({
            type: alertType,
            location: location,
            message: message,
            timestamp: timestamp
        });

        // Save back to localStorage
        localStorage.setItem('smsAlerts', JSON.stringify(smsAlerts));

        alert("SMS Alert sent!");
        
        // Clear inputs
        document.getElementById('alert-location').value = '';
        document.querySelector('.panel-card textarea').value = '';

        // Reload requests panel
        loadAppRequests();
    });
}

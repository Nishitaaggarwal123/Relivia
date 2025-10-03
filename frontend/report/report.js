document.addEventListener('DOMContentLoaded', () => {

    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = "../login/login.html";
    }

    const tbody = document.getElementById('requests-table-body');
    const filterSelect = document.getElementById('filterType'); // Add a select dropdown in HTML

    // Fetch requests
    const appRequests = JSON.parse(localStorage.getItem('appRequests') || '[]');
    const smsAlerts = JSON.parse(localStorage.getItem('smsAlerts') || '[]');

    function populateTable(filter = 'all') {
        tbody.innerHTML = '';

        let filteredRequests = [];

        if (filter === 'all' || filter === 'app') {
            filteredRequests = filteredRequests.concat(
                appRequests.map(req => ({
                    details: req.details,
                    type: req.type,
                    name: req.name,
                    contact: req.contact,
                    location: req.location,
                    timestamp: req.timestamp,
                    priority: req.priority
                }))
            );
        }

        if (filter === 'all' || filter === 'sms') {
            filteredRequests = filteredRequests.concat(
                smsAlerts.map(alert => ({
                    details: alert.message,
                    type: alert.type,
                    name: "SMS Alert",
                    contact: "-",
                    location: alert.location,
                    timestamp: alert.timestamp,
                    priority: "N/A"
                }))
            );
        }

        filteredRequests.forEach(req => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${req.details}</td>
                <td>${req.type}</td>
                <td>${req.name}</td>
                <td>${req.contact}</td>
                <td>${req.location}</td>
                <td>${req.timestamp}</td>
                <td>${req.priority}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    // Initial populate
    populateTable();

    // Filter change
    if (filterSelect) {
        filterSelect.addEventListener('change', () => {
            populateTable(filterSelect.value);
        });
    }

    // Navigation
    document.getElementById('dashboardLink').addEventListener('click', e => {
        e.preventDefault();
        window.location.href = "../dashboard/dashboard.html";
    });

    document.getElementById('controlPanelLink').addEventListener('click', e => {
        e.preventDefault();
        window.location.href = "../admin/admin.html";
    });

    document.getElementById('analyticsLink').addEventListener('click', e => {
        e.preventDefault();
        window.location.href = "../analytics/analytics.html";
    });

    document.getElementById('logoutLink').addEventListener('click', e => {
        e.preventDefault();
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('role');
        window.location.href = "../login/login.html";
    });

});

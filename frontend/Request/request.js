const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const request = {
        name: document.getElementById('name').value,
        contact: document.getElementById('contact').value,
        location: document.getElementById('location').value,
        type: document.getElementById('needType').value,
        priority: document.getElementById('priority').value,
        details: document.getElementById('need').value,
        timestamp: new Date().toLocaleString()
    };

    
    let requests = JSON.parse(localStorage.getItem('appRequests')) || [];

    
    requests.push(request);

   
    localStorage.setItem('appRequests', JSON.stringify(requests));

    
    alert('Your help request has been submitted!');

    
    form.reset();
});


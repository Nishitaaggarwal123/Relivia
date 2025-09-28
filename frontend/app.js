const API = 'http://localhost:5000';

document.getElementById('helpForm').addEventListener('submit', async e=>{
  e.preventDefault();
  const payload = {
    name: document.getElementById('name').value,
    contact: document.getElementById('contact').value,
    location: document.getElementById('location').value,
    need: document.getElementById('need').value
  };
  const res = await fetch(`${API}/help`, {
    method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)
  });
  const data = await res.json();
  alert('Request submitted: ' + (data.id || 'ok'));
  loadRequests();
});

async function loadRequests(){
  const res = await fetch(`${API}/requests`);
  const list = await res.json();
  const container = document.getElementById('requests');
  container.innerHTML = list.map(r => `
    <div class="request"><strong>${r.name}</strong> — ${r.location} <br/>
    ${r.need} <br/> Contact: ${r.contact} <br/> ${new Date(r.createdAt).toLocaleString()}</div>`).join('');
}
require('dotenv').config();
console.log(process.env.MY_VARIABLE);
loadRequests();

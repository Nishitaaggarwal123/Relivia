
   // Initialize Lucide icons
document.addEventListener("DOMContentLoaded", async () => {
    lucide.createIcons();

    const tableBody = document.getElementById("requests-table-body");

    try {
        const res = await fetch("http://localhost:5000/api/requests");
        const requests = await res.json();

        if (!requests.length) {
            tableBody.innerHTML = "<tr><td colspan='8'>No requests found.</td></tr>";
            return;
        }

        tableBody.innerHTML = requests.map(req => `
            <tr>
                <td>${req.need} (${req.needType})</td>
                <td>${req.source}</td>
                <td>${req.name} (${req.contact || "-"})</td>
                <td>${req.location} | ${new Date(req.createdAt).toLocaleString()}</td>
                <td>${req.sentVia ? "Sent via SMS" : "Not sent"}</td>
                <td>
                    <button class="btn btn-outline" onclick="alert('View details not implemented')">View</button>
                </td>
            </tr>
        `).join("");

        lucide.replace();
    } catch (err) {
        console.error(err);
        tableBody.innerHTML = "<tr><td colspan='8'>Failed to load requests.</td></tr>";
    }
});

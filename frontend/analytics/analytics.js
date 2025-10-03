 // Bar Chart - Disaster Frequency by Type
  new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: ["Flood", "Earthquake", "Cyclone", "Wildfire", "Other"],
      datasets: [{
        label: "Incidents",
        data: [320, 210, 145, 98, 74],
        backgroundColor: ["#3b82f6", "#ef4444", "#f59e0b", "#10b981", "#6366f1"]
      }]
    }
  });

  // Pie Chart - Report Verification Status
  new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
      labels: ["Verified", "Unverified"],
      datasets: [{
        data: [78, 22],
        backgroundColor: ["#22c55e", "#f87171"]
      }]
    }
  });

  // Line Chart - Incident Trends Over Time
  new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "Incidents",
        data: [150, 180, 200, 170, 220, 240],
        borderColor: "#3b82f6",
        fill: false,
        tension: 0.3
      }]
    }
  });

  // Bar Chart - Avg Response Time by Hour
  new Chart(document.getElementById("responseTimeChart"), {
    type: "bar",
    data: {
      labels: ["0-4h", "4-8h", "8-12h", "12-16h", "16-20h", "20-24h"],
      datasets: [{
        label: "Response Time (min)",
        data: [12, 15, 10, 18, 14, 11],
        backgroundColor: "#f59e0b"
      }]
    }
  });
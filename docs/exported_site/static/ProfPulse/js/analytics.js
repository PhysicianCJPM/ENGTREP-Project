// Analytics Dashboard JS

document.addEventListener("DOMContentLoaded", function () {
    // Simulated data for demonstration
    document.getElementById('active-users').textContent = '124';
    document.getElementById('completion-rate').textContent = '87%';
    document.getElementById('avg-engagement').textContent = '76%';

    // Chart.js example for engagement trends
    const ctx = document.getElementById('engagementChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
            datasets: [{
                label: 'Engagement (%)',
                data: [65, 72, 78, 74, 80],
                backgroundColor: 'rgba(0,123,255,0.1)',
                borderColor: '#007bff',
                borderWidth: 2,
                pointBackgroundColor: '#007bff',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
});
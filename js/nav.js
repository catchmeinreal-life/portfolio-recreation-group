// Navigation Bar
// Fetch the navigation bar HTML and insert it into the page



fetch('./pages/nav.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('nav').innerHTML = data;
        // Additional code to initialize any footer scripts if necessary
})
.catch(error => console.error('Error fetching footer:', error));
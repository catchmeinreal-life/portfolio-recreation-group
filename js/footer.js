fetch('./pages/footer.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('footer').innerHTML = data;
        // Additional code to initialize any footer scripts if necessary
      })
      .catch(error => console.error('Error fetching footer:', error));
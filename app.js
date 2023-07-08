document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.progress-bar');
  
    progressBar.addEventListener('input', function() {
      const percent = (this.value - this.min) / (this.max - this.min) * 100;
      this.style.background = `linear-gradient(to right, #1bd760 ${percent}%, #535353 ${percent}%)`;
    });
  });
  


document.addEventListener('DOMContentLoaded', function() {
  const dateInput = document.getElementById('booking_date');
  const timeInput = document.getElementById('booking_time');
  
  dateInput.addEventListener('blur', function() {
    if (this.value === '') {
      this.type = 'text';
    }
  });
  
  timeInput.addEventListener('blur', function() {
    if (this.value === '') {
      this.type = 'text';
    }
  });
  
  timeInput.addEventListener('click', function(e) {
    if (this.type !== 'time' && e.offsetX > this.offsetWidth - 40) {
      this.type = 'time';
      this.focus();
    }
  });
  
  document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    alert('Thank you for booking with us at Butterfly Kisses Luxury Picnic! We will inform that you made an appointment.');
    
    this.reset();
    
    dateInput.type = 'text';
    timeInput.type = 'text';
  });
});

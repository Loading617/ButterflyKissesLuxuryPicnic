// event handlers
var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);
var hour = (currentDateTime.getHours() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var dateElem = document.querySelector("#date");
var timeElem = document.querySelector("#time");

dateElem.setAttribute("min", dateTomorrow);

starttimeElem.onchange = function () {
    endtimeElem.setAttribute("min", this.value);
}

// contact information
var form = document.getElementById("contactForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var errorMessage = document.getElementById("errorMessage");

  if(name === "" || email === "" ||  message === "") {
    errorMessage.textContent = "All fields are required.";
    return;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)) {
    errorMessage.textContent = "Invalid email address.";
    return;
  }

  // Show message after Form submission
  const form = document.getElementById('myForm');
  const message = document.getElementById('message');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
  
    // Perform form submission logic here (e.g., send data to server)
  
    message.style.display = 'block'; // Show the message
  });
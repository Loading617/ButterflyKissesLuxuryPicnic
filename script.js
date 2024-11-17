const form = document.querySelector('.bookform');
const name = document.querySelector('name');
const email = document.querySelector('email');
const tel = document.querySelector('tel');
const participants = document.querySelector('participants');
const eventtype = document.querySelector('eventtype');
const starttime = document.querySelector('starttime');
const endtime = document.querySelector('endtime');
const date = document.querySelector('date');
const somethingelse = document.querySelector('somethingelse');

// contact information
const name = document.querySelector('name');
const email = document.querySelector('email');
const message = document.querySelector('message');

  // Show message after Form submission
  const form = document.getElementById('myForm');
  const message = document.getElementById('message');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
  
    // Perform form submission logic here (e.g., send data to server)
  
    message.style.display = 'block'; // Show the message
  });

  // Show message after contact information submission
  const contactForm = document.getElementById('contactForm');
  const contactMessage = document.getElementById('contactMessage');
  
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
  
    // Perform form submission logic here (e.g., send data to server)
  
    contactMessage.style.display = 'block'; // Show the message
  });

  form.addEventListener("submit", event => {
    event.preventDefault()
    console.log(`Form submitted to ${form.action}`);
    console.log(`Name: ${name.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Phone: ${tel.value}`);
    console.log(`Participants: ${participants.value}`);
    console.log(`Event Type: ${eventtype.value}`);
    console.log(`Start Time: ${starttime.value}`);
    console.log(`End Time: ${endtime.value}`);
    console.log(`Date: ${date.value}`);
    console.log(`Something Else: ${somethingelse.value}`);
    form.reset();
  });

document.addEventListener('DOMContentLoaded', () => {
    const videoItems = document.querySelectorAll('.video-item');
    const videoModal = document.getElementById('videoModal');
    const customVideo = document.getElementById('customVideo');
    const playPauseButton = document.getElementById('playPauseButton');
    const progressBar = document.getElementById('progressBar');
    const progressBarContainer = document.querySelector('.progress-bar-container');
    const currentTimeSpan = document.getElementById('currentTime');
    const durationSpan = document.getElementById('duration');
    const closeButton = document.querySelector('.close-button');

    let isPlaying = false;

    // Helper function to format time
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    // Open modal and load video
    videoItems.forEach(item => {
        item.addEventListener('click', () => {
            const videoSrc = item.getAttribute('data-src');
            // const posterSrc = item.getAttribute('data-poster-src'); // Not used directly in <video> here, but could be.

            customVideo.src = videoSrc;
            // customVideo.poster = posterSrc; // Uncomment if you want to use a poster attribute
            customVideo.load(); // Load the video
            videoModal.style.display = 'flex'; // Use flex to center the modal
            customVideo.focus(); // Focus video for potential keyboard controls
            
            // Reset player state
            isPlaying = false;
            playPauseButton.textContent = '▶';
            progressBar.style.width = '0%';
            currentTimeSpan.textContent = '0:00';
            durationSpan.textContent = '0:00';
            
            // Autoplay the video (optional, can be removed)
            // customVideo.play().catch(e => console.log("Autoplay prevented:", e));
            // isPlaying = true;
            // playPauseButton.textContent = '❚❚';
        });
    });

    // Close modal
    closeButton.addEventListener('click', () => {
        customVideo.pause(); // Pause video when modal closes
        videoModal.style.display = 'none';
        isPlaying = false;
        playPauseButton.textContent = '▶';
    });

    // Close modal if clicked outside content
    window.addEventListener('click', (event) => {
        if (event.target === videoModal) {
            customVideo.pause();
            videoModal.style.display = 'none';
            isPlaying = false;
            playPauseButton.textContent = '▶';
        }
    });

    // Play/Pause button functionality
    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            customVideo.pause();
            playPauseButton.textContent = '▶';
        } else {
            customVideo.play();
            playPauseButton.textContent = '❚❚';
        }
        isPlaying = !isPlaying;
    });

    // Update progress bar and time as video plays
    customVideo.addEventListener('timeupdate', () => {
        const progress = (customVideo.currentTime / customVideo.duration) * 100;
        progressBar.style.width = `${progress}%`;
        currentTimeSpan.textContent = formatTime(customVideo.currentTime);
    });

    // When video metadata is loaded, update duration
    customVideo.addEventListener('loadedmetadata', () => {
        durationSpan.textContent = formatTime(customVideo.duration);
    });

    // When video ends, reset play button and progress
    customVideo.addEventListener('ended', () => {
        isPlaying = false;
        playPauseButton.textContent = '▶';
        progressBar.style.width = '100%'; // Show full progress
        currentTimeSpan.textContent = formatTime(customVideo.duration); // Ensure current time matches duration
    });

    // Click on progress bar to seek (basic implementation)
    progressBarContainer.addEventListener('click', (e) => {
        const rect = progressBarContainer.getBoundingClientRect();
        const clickX = e.clientX - rect.left; // X position relative to the element
        const percentage = clickX / rect.width;
        customVideo.currentTime = customVideo.duration * percentage;
    });

    // Handle play/pause via video clicks (optional)
    customVideo.addEventListener('click', () => {
        playPauseButton.click(); // Simulate button click
    });
});

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

if (!name || !email || !phone || !service || !date || !time) {
  showNotification("Please fill in all required fields.", "error");
  return;
}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!email.match(emailPattern)) {
  showNotification("Please enter a valid email address.", "error");
  return;
}

const phonePattern = /^[\d\s\-\(\)]+$/;
if (!phone.match(phonePattern)) {
  showNotification("Please enter a valid phone number.", "error");
  return;
}
const subject = `Booking ${service}`;
const notes = document.getElementById('notes').value;

let body = `Name: ${name}\n`;
body += `Email: ${email}\n`;
body += `Phone: ${phone}\n`;
body += `Service: ${service}\n`;
body += `Date: ${date}\n`;
body += `Time: ${time}\n`;

if (notes) {
  body += `Notes: ${notes}\n`;
}

const mailtoLink = `mailto:$belindahouse40@gmail.com?subject={encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

window.location.href = mailtoLink;

showNotification("Thank you for booking with us at Butterfly Kisses Luxury Picnic! We will inform that you made an appointment.", "success");

function showNotification(message, type = "info") {
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notification) => notification.remove());
}

const notification = document.createElement("div");
notification.className = `notification notification--${type}`;
notification.innerHTML = `<div class="notification-content">
   <span class="notification-message">${message}</span>
   <button class="notification-close">&times;</button>
</div>
`;

Object.assign(notification.style, {
  position: "fixed",
  top: "20px",
  right: "20px",
  background: 
   type === "error"
    ? "linear-gradient(45deg, #ff6b6b, #ff8e8e)"
    : "linear-gradient(45deg, #4ecdc4, #45b7d1)",
  color: "white",
  padding: "16px 20px",
  borderRadius: "12px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  backdropFilter: "blur(10px)",
  zIndex: "100000",
  transform: "translateX(400px)",
  transition: "transform 0.3s ease",
  maxWidth: "300px",
  fontSize: "14px",
  fontWeight: "500",
});

document.body.appendChild(notification);

setTimeout(() => {
 notification.style.transform = "translateX(0)";
}, 100);

const closeBtn = notification.querySelector(".notification-close");
closeBtn.addEventListener("click", () => {
 notification.style.transform = "translateX(400px)";
 setTimeout(() => notification.remove(), 300);
});

setTimeout(() => {
 if (notification.parentNode) {
   notification.style.transform = "translateX(400px)";
   setTimeout(() => notification.remove(), 300);
  }
 }, 5000);

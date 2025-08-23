function initFormValidation() {
  const bookingForm = document.getElementById("booking-form");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const eventtype = document.getElementById("eventtype").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      if (!name || !email || !phone || !eventtype || !date || !time) {
        showNotification("Please fill out all required fields.", "error");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showNotification("Please enter a valid email address.", "error");
        return;
      }

      const phonePattern = /^[\d\s\-\(\)]+$/;
      if (!phonePattern.test(phone)) {
        showNotification("Please enter a valid phone number.", "error");
        return;
      }

      const subject = `Booking Request: ${service}`;
      const somethingelse = document.getElementById("somethingelse").value.trim();

      let body = `Name: ${name}\n`;
      body += `Email: ${email}\n`;
      body += `Phone: ${phone}\n`;
      body += `Event Type: ${eventtype}\n`;
      body += `Date: ${date}\n`;
      body += `Time: ${time}\n`;

      if (somethingelse) {
        body += `Something Else: ${somethingelse}\n`;
      }

      const mailtoLink = `mailto:belindahouse40@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;

      bookingForm.reset();

      showNotification(
        "Thank you for your booking request! We will contact you shortly to confirm your appointment.",
        "success"
      );
    });
  }
}

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


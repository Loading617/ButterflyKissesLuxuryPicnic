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

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    videoItems.forEach(item => {
        item.addEventListener('click', () => {
            const videoSrc = item.getAttribute('data-video-src');

            customVideo.src = videoSrc;

            customVideo.load();
            videoModal.style.display = 'flex';
            customVideo.focus();
            
            isPlaying = false;
            playPauseButton.textContent = '▶';
            progressBar.style.width = '0%';
            currentTimeSpan.textContent = '0:00';
            durationSpan.textContent = '0:00';
    closeButton.addEventListener('click', () => {
        customVideo.pause();
        videoModal.style.display = 'none';
        isPlaying = false;
        playPauseButton.textContent = '▶';
    });

    window.addEventListener('click', (event) => {
        if (event.target === videoModal) {
            customVideo.pause();
            videoModal.style.display = 'none';
            isPlaying = false;
            playPauseButton.textContent = '▶';
        }
    });

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

    customVideo.addEventListener('timeupdate', () => {
        const progress = (customVideo.currentTime / customVideo.duration) * 100;
        progressBar.style.width = `${progress}%`;
        currentTimeSpan.textContent = formatTime(customVideo.currentTime);
    });
    customVideo.addEventListener('loadedmetadata', () => {
        durationSpan.textContent = formatTime(customVideo.duration);
    });
    customVideo.addEventListener('ended', () => {
        isPlaying = false;
        playPauseButton.textContent = '▶';
        progressBar.style.width = '100%';
        currentTimeSpan.textContent = formatTime(customVideo.duration);
    });
    progressBarContainer.addEventListener('click', (e) => {
        const rect = progressBarContainer.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percentage = clickX / rect.width;
        customVideo.currentTime = customVideo.duration * percentage;
    });
    customVideo.addEventListener('click', () => {
        playPauseButton.click();
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

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Butterfly Kisses Luxury Picnic ▦ Home</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" type="image/x-icon" href="butterflykissesluxurypicnic.ico">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <header>
        <div class="container">
            <div class="logo">
            <img src="butterflykissesluxurypicnic.png" alt="Butterfly Kisses Luxury Picnic" width="608" height="298">
            </div>
            <nav>
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="about.php">About</a></li>
                    <li><a href="gallery.php">Gallery</a></li>
                    <li><a href="picnic.php">Picnic</a></li>
                    <li><a href="contact.php">Contact</a></li>
                    <li><a href="belindahouse.php">Belinda House</a></li>
                    <li><a href="book.php">Book</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <div class="container">
            <h1>Welcome To Butterfly Kisses Luxury Picnic Website!</h1>
            <?php echo "<h2>Say I do!</h2>"; ?>
            <?php echo "<h2>Our Picnic Experiences</h2>"; ?>
            <main class="video-gallery">
        <div class="video-item" data-src="./vids/butterflykissesluxurypicnicvideo.mp4">
            <div class="play-overlay">▶</div>
        </div>

        <div class="video-item" data-src="./vids/butterflykissesluxurypicnicvideo2.mp4">
            <div class="play-overlay">▶</div>
        </div>

        <div class="video-item" data-src="./vids/butterflykissesluxurypicnicvideo3.mp4">
            <div class="play-overlay">▶</div>
        </div>

        <div class="video-item" data-src="./vids/butterflykissesluxurypicnicvideo4.mp4">
            <div class="play-overlay">▶</div>
        </div>

        <div class="video-item" data-src="./vids/butterflykissesluxurypicnicvideo5.mp4">
            <div class="play-overlay">▶</div>
        </div>

        <div class="video-item" data-src="./vids/butterflykissesluxurypicnicvideo6.mp4">
            <div class="play-overlay">▶</div>
        </div>
    </main>

    <div id="videoModal" class="modal">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <div class="custom-video-player">
                <video id="customVideo" preload="auto"> Your browser does not support the video tag.
                </video>
                <div class="player-controls">
                    <button id="playPauseButton">▶</button>
                    <div class="progress-bar-container">
                        <div id="progressBar" class="progress-bar"></div>
                    </div>
                    <span id="currentTime">0:00</span> / <span id="duration">0:00</span>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
    </main>

    <div class="social-section">
    <a href="https://www.instagram.com/butterflykisses_luxurypicnic/" class="social-link" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="https://www.facebook.com/profile.php?id=100083296629256" class="social-link" target="_blank"><i class="fab fa-facebook"></i></a>
    <a href="https://www.tiktok.com/belindahouse0" class="social-link" target="_blank"><i class="fab fa-tiktok"></i></a>
    <a href="https://www.instagram.com/house_belinda/" class="social-link" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>

    <footer>
        <div class="container">
            <p>
            &copy; 2022-2025 Butterfly Kisses Luxury Picnic. All rights reserved. | <a href="mailto:belindahouse40@gmail.com">belindahouse40@gmail.com</a><br>
            <a href="tel:+8039154747">(803) 915-4747</a> | Address Coming Soon! | Columbia, SC Event Planner
            </p>
        </div>
    </footer>
</body>
</html>

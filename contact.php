<!DOCTYPE html>
<html lang="en">
<head>
    <title>Butterfly Kisses Luxury Picnic ▦ Contact</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" type="image/x-icon" href="butterflykissesluxurypicnic.ico">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" type="text/javascript" href="script.js">
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
                    <li><a href="gallery.php">Gallery</a></li>
                    <li><a href="picnic.php">Picnic</a></li>
                    <li><a href="book.php">Book</a></li>
                    <li><a href="thefounder.php">The Founder</a></li>
                    <li><a href="contact.php">Contact</a></li>
                    <li><a href="about.php">About</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <div class="container">
            <?php echo "<h1>Contact Us</h1>" ; ?>
            <?php echo "<p>
                To reach us, please use the following contact details:<br>
                Phone: <a href="tel:+8039154747">(803) 915-4747</a><br>
                Email: <a href="mailto:belindahouse40@gmail.com">belindahouse40@gmail.com</a><br>
                </p>"; ?>
                
                <form id="myForm">
                <div class="container">
                    <form action="script.js" method="post">

                            <label class="required">Name</label>
                            <input type="text" name="full_name" placeholder="ex. Alicia Smith" required>

                            <label class="required">Email</label>
                            <input type="email" name="email" placeholder="ex. aliciasmith@gmail.com" required>
                        
                            <label class="message">Message</label>
                            <textarea name="message" rows="5" placeholder="ex. Hi Belinda, I have Questions, Comments or Concerns"></textarea>
                        
  <button type="submit">Submit</button>
</form>
<div id="message" style="display: none;">Thanks for Contacting Us. We Will Hit You Back Soon!</div>
                </div>
    </main>
                    
    <div class="social-section">
    <a href="https://www.instagram.com/butterflykisses_luxurypicnic/" class="social-media-link" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="https://www.facebook.com/profile.php?id=100083296629256" class="social-media-link" target="_blank"><i class="fab fa-facebook"></i></a>
    <a href="https://www.tiktok.com/belindahouse0" class="social-media-link" target="_blank"><i class="fab fa-tiktok"></i></a>
    <a href="https://www.instagram.com/house_belinda/" class="social-media-link" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
                    
            <footer>
                <div class="container">
                &copy; 2022-2025 Butterfly Kisses Luxury Picnic. All rights reserved. | Address Coming Soon! | Columbia, SC Event Planner
                </div>
            </footer>
        </div>
</body>
</html>

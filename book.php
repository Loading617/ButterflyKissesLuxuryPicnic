<!DOCTYPE html>
<html lang="en">
<head>
    <title>Butterfly Kisses Luxury Picnic ▦ Book</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" type="image/x-icon" href="butterflykissesluxurypicnic.ico">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" type="text/css" href="script.js">
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
        <?php echo "<h1>Book with Butterfly Kisses Luxury Picnic</h1>"; ?>
        <?php echo "<p>Book your picnic with us and enjoy the luxury of Butterfly Kisses Luxury Picnic. Our picnic options include picnics, birthday parties, graduation celebrations, and anniversary events. Please let us know which event you'd like to book and we'll do our best to achieve.
        We'll make sure to accommodate your needs and preferences, and we'll provide you with the best possible experience. Please let us know if you have any questions or need further assistance.</p>"; ?>
        <form id="myForm">
        <form action="script.js" method="post">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="ex. Jessica House" required><br><br>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="jahimsankoh241@gmail.com" required><br><br>

            <label for="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="(803) 241-8888" required><br><br>

            <label for="participants">Participants</label>
            <input type="number" id="participants" name="participants" min="1" required><br><br>
            
            <label for="event">Event Type</label>
            <select id="event" name="event" required>
                <option value="picnic" selected>Picnic</option>
                <option value="date">Date</option>
                <option value="birthday">Birthday</option>
                <option value="graduation">Graduation</option>
                <option value="anniversary">Anniversary</option>
            </select><br><br>
            </select>

            <label for="start_time">Start Time</label>
            <input type="time" id="start_time" name="start_time" required><br><br>

            <label for="end_time">End Time</label>
            <input type="time" id="end_time" name="end_time" required><br><br>

            <label for="date">Date</label>
            <input type="date" id="date" name="date" required><br><br>
            
            <label for="something else">Something Else?</label>
            <textarea id="something else" name="something else" rows="5" placeholder="ex. I would like to have this at my event" optional></textarea><br><br>
            
  <button type="submit">Book Now</button>
</form>
<div id="message" style="display: none;">Thanks for Booking Us. We are Excited to Be At Your Event. See you Soon!</div>
    </div>
    </main>
    
    <footer>
        <div class="container">
        &copy; 2024 Butterfly Kisses Luxury Picnic. All rights reserved. | <a href="mailto:belindahouse941@gmail.com">belindahouse941@gmail.com</a><br>
        <a href="tel:+8039154747">(803) 915-4747</a> | Columbia, SC Event Planner
        </div>
    </footer>
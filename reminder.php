<?php
$servername = "localhost";
$username = "your_db_user";
$password = "your_db_password";
$dbname = "your_db_name";

$conn = new mysqli(hostname: $servername, username: $username, password: $password, database: $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$now = date(format: 'Y-m-d H:i:s');
$future_time = date(format: 'Y-m-d H:i:s', timestamp: strtotime(datetime: '+24 hours'));

$sql = "SELECT id, name, email, booking_date, booking_time FROM bookings 
        WHERE CONCAT(booking_date, ' ', booking_time) BETWEEN '$now' AND '$future_time'";

$result = $conn->query(query: $sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $name = $row['name'];
        $email = $row['email'];
        $booking_date = $row['booking_date'];
        $booking_time = $row['booking_time'];

        $subject = "Booking Reminder";
        $message = "Hello $name,\n\nThis is a reminder for your booking on $booking_date at $booking_time.\n\nSee you soon!";
        $headers = "From: noreply@yourwebsite.com";

        mail(to: $email, subject: $subject, message: $message, additional_headers: $headers);
    }
}

$conn->close();
?>

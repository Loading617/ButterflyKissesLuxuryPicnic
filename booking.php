<?php
$servername = "localhost";
$username = "your_db_user";
$password = "your_db_password";
$dbname = "your_db_name";

$conn = new mysqli(hostname: $servername, username: $username, password: $password, database: $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$booking_date = $_POST['booking_date'];
$booking_time = $_POST['booking_time'];
$booking_datetime = $booking_date . ' ' . $booking_time;

$stmt = $conn->prepare(query: "INSERT INTO bookings (name, email, booking_date, booking_time) VALUES (?, ?, ?, ?)");
$stmt->bind_param(types: "ssss", var: $name, vars: $email, $booking_date, $booking_time);

if ($stmt->execute()) {
    $subject = "Booking Confirmation";
    $message = "Hello $name,\n\nYour booking is confirmed for $booking_date at $booking_time.\n\nThank you!";
    $headers = "From: noreply@yourwebsite.com";

    mail(to: $email, subject: $subject, message: $message, additional_headers: $headers);

    echo "Booking confirmed. A confirmation email has been sent.";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>

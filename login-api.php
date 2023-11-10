<?php
// Database connection
$servername = "local host";
$username = "root";
$password = "";
$dbname = "test";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the username and password are provided in the POST request from the form
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Retrieve user data from the database that already created
    $stmt = $conn->prepare("SELECT ID, username, password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($userID, $dbUsername, $dbPassword);
    $stmt->fetch();
    $stmt->close();

    // Check if the username exists and the password is correct
    if ($dbUsername && password_verify($password, $dbPassword)) {
        // Return user information as JSON response
        $response = array(
            'status' => 'success',
            'user_id' => $userID,
            'username' => $dbUsername
        );
    } else {
        // Return an error message as JSON response
        $response = array(
            'status' => 'error',
            'message' => 'Invalid username or password'
        );
    }
} else {
    // Return an error message if username or password is not provided
    $response = array(
        'status' => 'error',
        'message' => 'Username and password are required'
    );
}

header('Content-Type: application/json');
echo json_encode($response);

$conn->close();
?>

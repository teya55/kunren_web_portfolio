<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sanitize and retrieve form data
    $inq_section = htmlspecialchars($_POST['inq_section']);
    $name = htmlspecialchars($_POST['your-name']);
    $email = htmlspecialchars($_POST['your-email']);
    $usage = htmlspecialchars($_POST['usage']);
    $subject = htmlspecialchars($_POST['件名']);
    $message = htmlspecialchars($_POST['your-message']);
    session_start();
    $_SESSION['form_data'] = $_POST; // Store form data in session

    // Debug: Output session data
    var_dump($_SESSION['form_data']);

    // Redirect to confirmation page
    header('Location: confirm.php');
    exit();
}
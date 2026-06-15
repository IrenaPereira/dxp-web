<?php
// Contact form handler for Digital Experiments (DreamHost / PHP mail()).
// Receives a POST from /contact, emails the inquiry, returns JSON.

header('Content-Type: application/json; charset=utf-8');

// --- config -------------------------------------------------------------
$TO   = 'sayhi@digitalexperiments.com';                 // where inquiries land
$FROM = 'Digital Experiments <noreply@digitalexperiments.com>'; // on-domain sender (SPF)
// ------------------------------------------------------------------------

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
  exit;
}

// Honeypot: real users never fill this hidden field. Silently accept bots.
if (!empty($_POST['company_url'])) {
  echo json_encode(['ok' => true]);
  exit;
}

$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$studio  = trim($_POST['studio'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Please add your name, a valid email, and a message.']);
  exit;
}

// Header-injection guard: no newlines in header-bound fields.
foreach ([$name, $email, $studio] as $v) {
  if (preg_match('/[\r\n]/', $v)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid input.']);
    exit;
  }
}

$subject = 'New inquiry — ' . $name . ($studio !== '' ? ' (' . $studio . ')' : '');
$body    = "Name:   $name\n"
         . "Email:  $email\n"
         . "Studio: " . ($studio !== '' ? $studio : '—') . "\n"
         . "-------------------------------------------\n\n"
         . $message . "\n";

$headers  = "From: $FROM\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($TO, $subject, $body, $headers)) {
  echo json_encode(['ok' => true]);
} else {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Something went wrong sending that. Please email us directly.']);
}

<?php

declare(strict_types=1);

// PHP 8.3 — script de contacto, recibe JSON desde el formulario del portfolio.

const TO_EMAIL = 'aymedeyacoan@gmail.com';
const FROM_EMAIL = 'no-reply@yacoanix.com';
const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;

header('Content-Type: application/json; charset=utf-8');

function respond(int $statusCode, array $payload): never
{
    http_response_code($statusCode);
    echo json_encode($payload);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['success' => false, 'error' => 'Método no permitido']);
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    respond(400, ['success' => false, 'error' => 'Petición inválida']);
}

// Honeypot: campo oculto que solo rellenan los bots.
if (!empty($data['company'] ?? '')) {
    respond(200, ['success' => true]);
}

$name = trim((string) ($data['name'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
    respond(400, ['success' => false, 'error' => 'Faltan campos obligatorios']);
}

if (mb_strlen($name) > MAX_NAME_LENGTH || mb_strlen($message) > MAX_MESSAGE_LENGTH) {
    respond(400, ['success' => false, 'error' => 'Campos demasiado largos']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, ['success' => false, 'error' => 'Email inválido']);
}

// Evita inyección de cabeceras (CRLF) en campos que se vuelcan en headers de email.
$sanitizeHeader = static fn (string $value): string => str_replace(["\r", "\n"], '', $value);

$name = $sanitizeHeader($name);
$email = $sanitizeHeader($email);

$subject = 'Nuevo mensaje desde el portfolio';
$body = sprintf(
    "Nombre: %s\nEmail: %s\n\nMensaje:\n%s\n",
    $name,
    $email,
    $message
);

$headers = [
    'From: ' . FROM_EMAIL,
    'Reply-To: ' . $sanitizeHeader($email),
    'Content-Type: text/plain; charset=utf-8',
];

$sent = mail(TO_EMAIL, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    respond(500, ['success' => false, 'error' => 'No se pudo enviar el mensaje']);
}

respond(200, ['success' => true]);

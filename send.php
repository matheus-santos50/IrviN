<?php
// Arquivo: send.php
// Envia o formulário de contato por e-mail simples

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = htmlspecialchars($_POST["name"] ?? '');
    $email   = htmlspecialchars($_POST["email"] ?? '');
    $subject = htmlspecialchars($_POST["subject"] ?? '');
    $message = htmlspecialchars($_POST["message"] ?? '');

    if (!$name || !$email || !$subject || !$message) {
        die("Preencha todos os campos.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("E-mail inválido.");
    }

    // Para onde vai a mensagem
    $to = "irvinrock66@gmail.com";

    // Assunto do e-mail
    $mail_subject = "[Contato] " . $subject;

    // Corpo do e-mail
    $body = "Nome: $name\n";
    $body .= "E-mail: $email\n";
    $body .= "Assunto: $subject\n\n";
    $body .= "Mensagem:\n$message\n";

    // Cabeçalhos
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $mail_subject, $body, $headers)) {
        echo "OK";
    } else {
        echo "Erro ao enviar. Verifique se o servidor tem função mail() ativa.";
    }
}

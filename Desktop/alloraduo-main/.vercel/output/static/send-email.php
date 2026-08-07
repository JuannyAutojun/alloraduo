<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Trata requisições preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Verifica se a requisição é POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["ok" => false, "message" => "Método não permitido."]);
    exit();
}

// Lê o corpo da requisição JSON enviada pelo React
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

// Captura e limpa os campos
$interesse = trim($data['interesse'] ?? '');
$nome      = trim($data['nome'] ?? '');
$email     = trim($data['email'] ?? '');
$telefone  = trim($data['telefone'] ?? '');

// Validação simples
if (empty($interesse) || empty($nome) || empty($email) || empty($telefone)) {
    http_response_code(400);
    echo json_encode(["ok" => false, "message" => "Preencha todos os campos obrigatórios."]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["ok" => false, "message" => "E-mail inválido."]);
    exit();
}

// Configurações do e-mail de destino
$to = "alloraduo@gmail.com";
$subject = "Novo Lead no Simulador - " . $nome;

// Limpa caracteres do telefone para criar o link do WhatsApp
$phoneDigits = preg_replace('/\D/', '', $telefone);

// Layout HTML elegante (Design Allora Duo)
$body = "
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #222; background-color: #f4f4f4; padding: 20px; }
    .card { background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; max-width: 550px; margin: 0 auto; overflow: hidden; }
    .header { background: #1a1a1a; color: #d4af37; padding: 20px; text-align: center; font-weight: bold; font-size: 18px; }
    .content { padding: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-size: 12px; font-weight: bold; color: #777; text-transform: uppercase; letter-spacing: 0.5px; }
    .value { font-size: 16px; color: #111; margin-top: 4px; }
    .badge { display: inline-block; background: #fff8e6; color: #b8860b; border: 1px solid #f0e68c; padding: 6px 12px; border-radius: 4px; font-weight: bold; }
  </style>
</head>
<body>
  <div class='card'>
    <div class='header'>Novo Lead Recebido - Allora Duo</div>
    <div class='content'>
      <div class='field'>
        <div class='label'>Interesse Selecionado</div>
        <div class='value'><span class='badge'>{$interesse}</span></div>
      </div>
      <hr style='border:0; border-top:1px solid #eee; margin:15px 0;'>
      <div class='field'>
        <div class='label'>Nome Completo</div>
        <div class='value'>{$nome}</div>
      </div>
      <div class='field'>
        <div class='label'>E-mail</div>
        <div class='value'><a href='mailto:{$email}'>{$email}</a></div>
      </div>
      <div class='field'>
        <div class='label'>Telefone / WhatsApp</div>
        <div class='value'><a href='https://wa.me/55{$phoneDigits}' target='_blank'>{$telefone} (Clique para chamar no WhatsApp)</a></div>
      </div>
    </div>
  </div>
</body>
</html>
";

// Cabeçalhos HTTP para e-mail HTML
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Allora Duo Simulador <noreply@" . ($_SERVER['HTTP_HOST'] ?? 'alloraduo.com.br') . ">" . "\r\n";
$headers .= "Reply-To: {$nome} <{$email}>" . "\r\n";

// Disparo da mensagem
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(["ok" => true, "message" => "Mensagem enviada com sucesso!"]);
} else {
    http_response_code(500);
    echo json_encode(["ok" => false, "message" => "Erro ao enviar e-mail pelo servidor."]);
}
?>
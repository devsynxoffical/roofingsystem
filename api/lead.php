<?php
/*
  Forwards a lead to the owner's CRM webhook (e.g. a GoHighLevel inbound
  webhook). Set the URL in lead-config.php one level ABOVE public_html:

    <?php return ['webhook' => 'https://services.leadconnectorhq.com/hooks/...'];

  Without it this returns {"forwarded": false} and the site relies on the
  email delivery that runs in the visitor's browser.
*/
header('Content-Type: application/json');
header('Cache-Control: no-store');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['forwarded' => false]); exit; }

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) { http_response_code(400); echo json_encode(['forwarded' => false, 'error' => 'invalid json']); exit; }

$lead = [];
foreach ($data as $k => $v) {
  if (is_string($v) && strpos($k, '_') !== 0) $lead[substr($k, 0, 50)] = substr($v, 0, 2000);
}
if (empty($lead['email']) && empty($lead['phone'])) { http_response_code(400); echo json_encode(['forwarded' => false, 'error' => 'email or phone required']); exit; }

$configFile = dirname($_SERVER['DOCUMENT_ROOT']) . '/lead-config.php';
$config = is_file($configFile) ? include $configFile : [];
$webhook = is_array($config) && !empty($config['webhook']) ? $config['webhook'] : '';
if ($webhook === '') { echo json_encode(['forwarded' => false, 'reason' => 'no webhook configured']); exit; }

$lead['received_at'] = gmdate('c');
$lead['site'] = 'roofingsystems.co';
$ch = curl_init($webhook);
curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_POSTFIELDS => json_encode($lead), CURLOPT_HTTPHEADER => ['Content-Type: application/json'], CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 10]);
curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);
echo json_encode(['forwarded' => $code >= 200 && $code < 300]);

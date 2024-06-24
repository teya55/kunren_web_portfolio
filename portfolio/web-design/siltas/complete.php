<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inq_section = htmlspecialchars($_POST['inq_section']);
    $your_name = htmlspecialchars($_POST['your-name']);
    $your_email = htmlspecialchars($_POST['your-email']);
    $usage = htmlspecialchars($_POST['usage']);
    $subject = htmlspecialchars($_POST['件名']);
    $message = htmlspecialchars($_POST['your-message']);

    // メール送信の処理（例）
    $to = 'info@example.com';
    $subject_mail = 'お問い合わせ: ' . $subject;
    $message_mail = "お問い合わせ区分: $inq_section\nお名前: $your_name\nメールアドレス: $your_email\nご利用区分: $usage\n件名: $subject\nメッセージ:\n$message";
    $headers = "From: $your_email";

    // メール送信をコメントアウト
    /*
    if (mail($to, $subject_mail, $message_mail, $headers)) {
        $mail_sent = true;
    } else {
        $mail_sent = false;
        $error_message = error_get_last()['message'];
    }
    */
    $mail_sent = true; // テストのため、メール送信に成功したことにする
}
?>
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>完了画面</title>
  <link rel="stylesheet" href="css/php.css">
</head>

<body>
  <div class="main">
    <div class="wrapper">
      <h2 class="page-title">お問い合わせが完了しました</h2>
      <?php if ($mail_sent): ?>
      <p>お問い合わせいただきありがとうございます。 <br>確認次第、ご連絡いたします。</p>
      <?php else: ?>
      <p>メールの送信に失敗しました。エラー: <?php echo htmlspecialchars($error_message); ?></p>
      <?php endif; ?>
      <a href="index.html" class="btn-contact">トップページへ戻る</a>
    </div>
  </div>
</body>

</html>

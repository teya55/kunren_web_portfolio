<?php
session_start();

if(!isset($_SESSION['user'])) {
    $no_login_url = 'login.php';
    header("Location: {$no_login_url}");
    exit;
}
?>
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <title>ログイン成功ページ</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/login.css">
</head>

<body>
  <div class="container login">
    <h3 class="fsize">ログインに成功しました</h3>
    <p>以下のメニューからお選びください</p>
    <div class="menu">
      <a href="survey_form.php" class="button">ご予約ページはこちらから</a>
      <a href="index.html" class="button">トップページに戻る</a>
    </div>
  </div>
</body>

</html>
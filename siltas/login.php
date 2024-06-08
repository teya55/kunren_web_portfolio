<?php
session_start();
$error_message = '';

if(isset($_POST['login'])) {
    if($_POST['user_name'] == 'admin' && $_POST['password'] == 'password') {
        $_SESSION['user'] = $_POST['user_name'];
        $login_success_url = 'login_success.php';
        header("Location: {$login_success_url}");
        exit;
    }
    $error_message = '※ログインID、<br>パスワードが間違っています。<br>　もう一度入力してください。';
}
?>
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <title>ログインページ</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/login.css">
</head>

<body>
  <div class="container login">
    <!-- エラーメッセージを表示します -->
    <?php if(isset($error_message)): ?>
    <p class="error-message"><?php echo $error_message; ?></p>
    <?php endif; ?>
    <form action="login.php" method="POST">
      <h3 class="fsize">ログイン画面</h3>
      <p>ログインID：<input type="text" name="user_name" placeholder="admin"></p>
      <p>パスワード：<input type="password" name="password" placeholder="password"></p>
      <input type="submit" name="login" value="ログイン">
      <div class="return">
        <a href="index.html" class="button">トップページに戻る</a>
      </div>
    </form>
  </div>
</body>

</html>
<?php
$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inq_section = htmlspecialchars($_POST['inq_section']);
    $your_name = htmlspecialchars($_POST['your-name']);
    $your_email = htmlspecialchars($_POST['your-email']);
    $usage = htmlspecialchars($_POST['usage']);
    $subject = htmlspecialchars($_POST['件名']);
    $message = htmlspecialchars($_POST['your-message']);

    // 入力チェック
    if (empty($inq_section)) {
        $errors['inq_section'] = '入力をお願いします';
    }
    if (empty($your_name)) {
        $errors['your-name'] = '入力をお願いします';
    }
    if (empty($your_email)) {
        $errors['your-email'] = '入力をお願いします';
    }
    if (empty($subject)) {
        $errors['件名'] = '入力をお願いします';
    }
    if (empty($message)) {
        $errors['your-message'] = '入力をお願いします';
    }
}
?>
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>確認画面</title>
  <link rel="stylesheet" href="css/php.css">
		<style>
			.error {
				color: red;
				font-weight: bold;
			}
		</style>
</head>

<body>
  <div class="main">
    <div class="wrapper">
      <h2 class="page-title">確認画面</h2>
      <?php if (!empty($errors)): ?>
      <form action="confirm.php" method="POST">
        <div>
          <label>お問い合わせ区分:</label>
          <p><?php echo $inq_section; ?></p>
          <?php if (isset($errors['inq_section'])): ?>
          <p class="error"><?php echo $errors['inq_section']; ?></p>
          <?php endif; ?>
          <input type="hidden" name="inq_section" value="<?php echo $inq_section; ?>">
        </div>
        <div>
          <label>お名前:</label>
          <p><?php echo $your_name; ?></p>
          <?php if (isset($errors['your-name'])): ?>
          <p class="error"><?php echo $errors['your-name']; ?></p>
          <?php endif; ?>
          <input type="hidden" name="your-name" value="<?php echo $your_name; ?>">
        </div>
        <div>
          <label>メールアドレス:</label>
          <p><?php echo $your_email; ?></p>
          <?php if (isset($errors['your-email'])): ?>
          <p class="error"><?php echo $errors['your-email']; ?></p>
          <?php endif; ?>
          <input type="hidden" name="your-email" value="<?php echo $your_email; ?>">
        </div>
        <div>
          <label>ご利用区分:</label>
          <p><?php echo $usage; ?></p>
          <input type="hidden" name="usage" value="<?php echo $usage; ?>">
        </div>
        <div>
          <label>件名:</label>
          <p><?php echo $subject; ?></p>
          <?php if (isset($errors['件名'])): ?>
          <p class="error"><?php echo $errors['件名']; ?></p>
          <?php endif; ?>
          <input type="hidden" name="件名" value="<?php echo $subject; ?>">
        </div>
        <div>
          <label>メッセージ:</label>
          <p><?php echo nl2br($message); ?></p>
          <?php if (isset($errors['your-message'])): ?>
          <p class="error"><?php echo $errors['your-message']; ?></p>
          <?php endif; ?>
          <input type="hidden" name="your-message" value="<?php echo $message; ?>">
        </div>
        <div>
          <button type="submit" class="btn-contact">確認する</button>
          <button type="button" class="btn-contact" onclick="history.back()">戻る</button>
        </div>
      </form>
      <?php else: ?>
      <form action="complete.php" method="POST">
        <div>
          <label>お問い合わせ区分:</label>
          <p><?php echo $inq_section; ?></p>
          <input type="hidden" name="inq_section" value="<?php echo $inq_section; ?>">
        </div>
        <div>
          <label>お名前:</label>
          <p><?php echo $your_name; ?></p>
          <input type="hidden" name="your-name" value="<?php echo $your_name; ?>">
        </div>
        <div>
          <label>メールアドレス:</label>
          <p><?php echo $your_email; ?></p>
          <input type="hidden" name="your-email" value="<?php echo $your_email; ?>">
        </div>
        <div>
          <label>ご利用区分:</label>
          <p><?php echo $usage; ?></p>
          <input type="hidden" name="usage" value="<?php echo $usage; ?>">
        </div>
        <div>
          <label>件名:</label>
          <p><?php echo $subject; ?></p>
          <input type="hidden" name="件名" value="<?php echo $subject; ?>">
        </div>
        <div>
          <label>メッセージ:</label>
          <p><?php echo nl2br($message); ?></p>
          <input type="hidden" name="your-message" value="<?php echo $message; ?>">
        </div>
        <div>
          <button type="submit" class="btn-contact">送信する</button>
          <button type="button" class="btn-contact" onclick="history.back()">戻る</button>
        </div>
      </form>
      <?php endif; ?>
    </div>
  </div>
</body>

</html>

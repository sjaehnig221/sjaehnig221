<?php
  if(isset($_POST['submit'])) {
    $quote = $_POST['quotes'];

    $mailTo = "sjaehnig@umich.edu";
    $subject = "From: My Website";

    mail($mailTo, $subject, $quote);
    header("Location: quotes.php?mailsend");
  }
  ?>

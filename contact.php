<?php
mb_internal_encoding("UTF-8");
if($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$age = $_POST['age'];
	$address = $_POST['address'];
	$phone = $_POST['phone'];
	$content = $_POST['content'];
    $date = $_POST['date'];
    $venue = $POST['venue'];

	$body .= "氏名:".$name."\n";
	$body .= "年齢:".$age."\n";
    $body .= "メールアドレス:".$email."\n";
    $body .= "住所:".$address."\n";
	$body .= "電話番号:".$phone."\n";
    $body .= "希望日程:".$date."\n";
    $body .= "希望校:".$venue."\n";
	$body .= "お問い合わせ内容:\n".$content."\n\n";

	//メールの送り先,メールの送り元,メールタイトル
	$flg = SENDMAIL("info@permil.jp", $address, "カウンセリング希望", $body);

	if($flg == true) {
		$message = "無料カウンセリングのお申込みが完了しました。\n弊社より折り返しご連絡致します。\n今しばらくお待ち下さい。";
	} else {
		$message = "メールの送信に失敗しました。\n大変お手数ですが、もう一度やり直して下さい。";
	}
}

function SENDMAIL($to,$from,$sub,$body) {
	mb_language("uni");
	mb_internal_encoding("utf-8");//utf-8 or SJIS
	$Head="";
	$Head.="From: ".$from."\n";
	$Head.="Mime-Version: 1.0\n";
	$Head.="Reply-To: ".$from."\n";
	$Head.="X-Mailer: PHP/". phpversion();
	$flg = mb_send_mail($to, $sub, $body,$Head,"nishiumi@permil.jp");
	return $flg;
}
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>CodeVillage</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Khula" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">    
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.css">
    <title>Document</title>
</head>
<body>
    <nav class="sp" id="js-navMenu">
        <a class="menu-close-trigger js-menuCloseTrigger">
            <span></span>
            <span></span>
        </a>
        <ul>
            <li><a href="./#about" class="js-menuCloseTrigger"></a>CodeVillageとは</li>
            <li><a href="./#curriculum" class="js-menuCloseTrigger"></a>カリキュラム</li>
            <li><a href="./#entry" class="js-menuCloseTrigger"></a>受講について</li>
            <li><a href="./#tution" class="js-menuCloseTrigger"></a>料金</li>
            <li class="reservation"><a href="../#contact" id="js-menuCloseTrigger" class="js-menuCloseTrigger"></a>無料カウンセリングを予約する</li>
        </ul>
    </nav>
    <div class="wrapper">
        <header>
            <h1><a href="../">Code Village</a></h1>
            <a class="menu-trigger tab" id="js-menuTrigger" href="#">
                <span></span>
                <span></span>
                <span></span>
            </a>              
            <nav class="pc">
                <ul>
                    <li><a href="./#about">CodeVillageとは</a></li>
                    <li><a href="./#curriculum">カリキュラム</a></li>
                    <li><a href="./#entry">受講について</a></li>
                    <li><a href="./#tution">料金</a></li>
                    <a href="./#contact"><li class="reservation">無料カウンセリングを予約する</li></a>
                </ul>
            </nav>
		</header>


		<section class="contact-sended">
			<p>
				<?php echo $message; ?>
			</p>
			<p><a href="./">>>戻る</a></p>
		</section>
		

		<footer>
        <div class="footer-list footer-list-wrap">
            <ul>
                <li><a href="./#about">特徴</a></li>
                <li><a href="./#flow">講義</a></li>
                <li><a href="./#curriculum">カリキュラム</a></li>
                <li><a href="./#entry">入校までの流れ</a></li>
                <li><a href="./#voice">生徒の声</a></li>
                <li><a href="./#faq">よくあるご質問</a></li>
                <li><a href="./#tution">受講料</a></li>
                <li><a href="./#contact">お問い合わせ</a></li>
            </ul>
            <ul>
                <li><a href="./#access">東京池袋校</a></li>
                <li><a href="./#access">大阪梅田校</a></li>
            </ul>
            <div class="footer-list__icon">
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-facebook-square"></i>
            </div>
        </div>
        <div class="footer-logo">
            <ul class="privacies">
                <li><a href="#">特定商取引法に基づく表記</a></li>
                <li><a href="./privacy_policy">プライバシーポリシー</a></li>
            </ul>
            <p>permil.inc</p>
        </div>
    </footer>
    </div>
    <script src="./index.js"></script>
</body>
</html>

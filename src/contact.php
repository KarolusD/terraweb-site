<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once($_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/src/PHPMailer.php');
require_once $_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/src/Exception.php';
require_once($_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/src/SMTP.php');
$sEmail = "";
$sName = "";
$sNumber = "";
$sMessage = "";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $aMessageReturn = [];
    $bErrorName = false;
    if ($_POST['email'] == "") {
        $aMessageReturn[] = "Podaj swój email lub numer telefonu";
        $bErrorName = true;
    }
    if ($_POST['name'] == "") {
        $bErrorName = true;
        $aMessageReturn[] = "Podaj swoje imie";
    }
    if ($_POST['message'] == "" || strlen($_POST['message']) < 10) {
        $bErrorName = true;
        $aMessageReturn[] = "Wpisz przynajmniej 10 znaków w swojej wiadomości";
    }
    if ($_POST['email'] !== "") {
        if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $bErrorName = true;
            $aMessageReturn[] = "Podaj prawidłowy adres email";
        }
    }

    if (!$bErrorName) {
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->CharSet = 'UTF-8';
        $mail->SMTPDebug = 0;
        $mail->Host = 'mail.terraweb.pl';
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        //$mail->Port = 587;
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = true;
        $mail->Username = 'biuro@terraweb.pl';
        $mail->Password = '<aA19?X!>';

        $mail->setFrom('biuro@terraweb.pl', 'Kontakt Terraweb');
        $mail->AddCC($_POST['email']);
        $mail->AddBCC('adam@terraweb.pl');
        $mail->AddBCC('karol@terraweb.pl');
        $mail->addAddress('biuro@terraweb.pl');

        $mail->Subject = "Wiadomość z formularza Terraweb.pl";
        $mail->Body = "'" . $_POST['message'] . "' - Wiadomość od: '" . $_POST['email'] ."' - " . $_POST['phone'] ?? "";

        if (!$mail->send()) {
            $bErrorName = true;
            $aMessageReturn[] = "Wystąpił błąd serwera, prosimy o ponowną próbę";
        } else {
            $bErrorName = false;
            header("Location: http://".$_SERVER['HTTP_HOST']."/?send=true#kontakt");
        }
    } else {
        $sEmail = $_POST['email'] ?? "";
        $sName = $_POST['name'] ?? "";
        $sNumber = $_POST['phone'] ?? "";
        $sMessage = $_POST['message'] ?? "";
    }
}
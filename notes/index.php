<?php
session_start();
$sHost = '127.0.0.1';
$sDbUsername = 'studiosp_notes';
$sPassword = '<aA19?X!>';
$sDbName = 'studiosp_notes';
function getUserIP()
{
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP))
    {
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP))
    {
        $ip = $forward;
    }
    else
    {
        $ip = $remote;
    }

    return $ip;
}

    $conn = mysqli_connect($sHost, $sDbUsername, $sPassword, $sDbName);
    // $conn = mysqli_connect($sHost, $sDbUsername, $sPassword, $sDbName);
    $user_ip = getUserIP();
	$sql = "SELECT * FROM `visits` WHERE `ip`='".$user_ip."'";
	
	  $aResult = $conn->query($sql);
	  if(!$aResult->fetch_assoc()){
	  $sql = "INSERT INTO `visits`(`ip`) VALUES ('" . $user_ip ."')";
	  $conn->query($sql);
	  }


if (isset($_GET['log'])) {
    unset($_SESSION['sbLoggedIn']);
}

if (isset($_POST['user']) && isset($_POST['pass'])) {

    if ($_POST['user'] == "admin") {

        if ($_POST['pass'] == "notatkiKurwa") {
            $_SESSION['sbLoggedIn'] = true;
        }
    }
}
if (isset($_SESSION['sbLoggedIn'])) {
    if (isset($_POST['action']) && $_POST['action'] == "update") {
         $conn = mysqli_connect($sHost, $sDbUsername, $sPassword, $sDbName);
        $conn->set_charset("utf8");
        $sql = "UPDATE `notes` SET `name` = '" . $_POST['title'] . "', `text`='" . $_POST['description'] . "', `modify_timestamp`=" . time() . " WHERE id='" . $_POST['id'] . "'";
        $q = $conn->query($sql);
        header('Location: /notes/index.php');
    }
    if (isset($_POST['action']) && $_POST['action'] == "insert") {
         $conn = mysqli_connect($sHost, $sDbUsername, $sPassword, $sDbName);
        $conn->set_charset("utf8");
        $sql = "INSERT INTO `notes`(`name`, `text`,`modify_timestamp`) VALUES ('" . $_POST['title'] . "','" . $_POST['description'] . "','" . time() . "')";
        $q = $conn->query($sql);
        header('Location: /notes/index.php');
    }
    if (isset($_POST['action']) && $_POST['action'] == "delete") {
         $conn = mysqli_connect($sHost, $sDbUsername, $sPassword, $sDbName);
        $conn->set_charset("utf8");
        $sql = "DELETE FROM `notes` WHERE id='" . $_POST['id'] . "'";
        $q = $conn->query($sql);
        header('Location: /notes/index.php');
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <?php if (isset($_SESSION['sbLoggedIn'])) : ?>
        <title>Notatki wewnętrzne</title>
    <?php else : ?>
        <title>Zaloguj się</title>
    <?php endif; ?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:500,700&amp;subset=latin-ext" rel="stylesheet">
    <style>
        * {
            font-family: "Montserrat", sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-size: 16px;
            color: white;
            font-weight: 500;
        }

        strong, b, em {
            font-weight: 700;
        }

        a {
            text-decoration: none;
        }

        body {
            background: #101722;
        }

        .main-container {
            width: 90%;
            margin: 0 auto;
        }

        input, select {
            background: white;
            color: #101722;
        }

        .login-form {
            width: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 40px auto;
        }

        .login-form input {
            margin: 10px auto;
            width: 100%;
            padding: 10px;
        }

        .login-form button {
            background: white;
            color: white;
            height: 40px;
            cursor: pointer;
            padding: 0 32px;
            background: white;
            border: none;
            background: #2E88E8;
            /* Primary flat shadow */
            box-shadow: -4px 4px 0px rgba(46, 136, 232, 0.4);
            text-transform: uppercase
        }

        .notes-list {
            display: flex;
            width: 100%;
            margin: 40px auto;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .note {
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin: 10px 0;
        }

        .note p {
            display: block;
            font-size: 1.1em;
            display: flex;
            align-items: center;
            justify-content: center;
position:relative;
letter-spacing:1px;
        }

        .note p span.modify {
            font-size: 0.7em;
			letter-spacing:1px;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 200px;
        }

        .note .forms-container {
            display: flex;
        }

        .note .forms-container form {
            margin: 0 10px;
        }

        .note form button {
            background: white;
            color: white;
            height: 40px;
            cursor: pointer;
            padding: 0 32px;
            background: white;
            border: none;
            background: #2E88E8;
            /* Primary flat shadow */
            box-shadow: -4px 4px 0px rgba(46, 136, 232, 0.4);
            text-transform: uppercase;
			letter-spacing:1px;

        }

        .note form button.delete {
            background: #C30000;
            box-shadow: -4px 4px 0px rgba(195, 0, 0, 0.4);
        }

        .note form button.edit {
            background: rgb(0, 153, 0);
            box-shadow: -4px 4px 0px rgba(0, 153, 0, 0.4);
        }

        .new-note-form {
            width: 100%;
        }

        .new-note-form form {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        .new-note-form form input, textarea, button {

            margin: 10px auto;
            width: 100%;
            padding: 10px;
			letter-spacing:1px;
        }

        .new-note-form form textarea {
            height: 300px;
        }

        .new-note-form form button {
            background: white;
            width: 200px;
            color: white;
            height: 40px;
            cursor: pointer;
            padding: 0 32px;
            background: white;
            border: none;
            background: #2E88E8;
            /* Primary flat shadow */
            box-shadow: -4px 4px 0px rgba(46, 136, 232, 0.4);
            text-transform: uppercase;
			letter-spacing:1px;
        }

        .note-see {
            width: 100%;
        }

        .note-see h1 {
            font-size: 3em;
            margin: 20px auto;
            text-align: center;
        }

        .note-see h2 {
            font-size: 2em;
            margin: 10px auto;
            text-align: left;
        }

        .note-see .desc .paragraph {
            padding-left: 20px;
        }

        .note-see .desc .paragraph h4 {
            font-size: 1.5em;
            margin: 5px auto;
        }

        .note-see .desc .paragraph p {
            padding-left: 20px;
        }

        a.back {
            width: 200px;
            color: white;
            height: 40px;
            cursor: pointer;
            padding: 0 32px;
            border: none;
            background: #2E88E8;
            /* Primary flat shadow */
            box-shadow: -4px 4px 0px rgba(46, 136, 232, 0.4);
            text-transform: uppercase;
            margin: 20px auto;
            display: block;
            line-height: 40px;
            text-align: center;
        }

        .edit-note-form {
            width: 100%;

        }

        .edit-note-form form {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        .edit-note-form form input, textarea, button {

            margin: 10px auto;
            width: 100%;
            color: #101722;
            padding: 10px;
			letter-spacing:1px;
        }

        .edit-note-form form textarea {
            height: 300px;

        }

        .edit-note-form form button {
            background: white;
            width: 200px;
            color: white;
            height: 40px;
            cursor: pointer;
            padding: 0 32px;
            background: white;
            border: none;
            background: #2E88E8;
            /* Primary flat shadow */
            box-shadow: -4px 4px 0px rgba(46, 136, 232, 0.4);
            text-transform: uppercase;
			letter-spacing:1px;
        }

        @media (max-width: 768px) {
            .main-container {
                width: 300px;
            }

            .note p {
                font-size: 1.5em;
                font-weight: 700;
				display: flex;
    flex-direction: column;
	text-align:center;
            }

            .note {
                flex-direction: column;
            }

            .note .forms-container {
                flex-direction: column;
            }
			.note p span.modify {
				position:relative;
				margin:20px auto;
				text-align:center;
			}

        }
    </style>
</head>
<body>
<div class="main-container">
    <?php if (isset($_SESSION['sbLoggedIn'])) : ?>

        <?php
         $conn = mysqli_connect($sHost, $sDbUsername, $sPassword, $sDbName);
        $conn->set_charset("utf8");
        $sql = "SELECT * FROM `notes`";
        $q = $conn->query($sql);
        for ($aNotes = array(); $row = $q->fetch_assoc(); $aNotes[] = $row) ;
        ?>

        <?php if (isset($_POST['action']) && $_POST['action'] != 'update' && $_POST['action'] != 'insert' && $_POST['action'] != 'delete') :
            if ($_POST['action'] == "see") :?>
                <?php foreach ($aNotes as $note) {
                    if ($note['name'] == $_POST['name']) {
                        $current = $note;
                    }
                } ?>
                <div class="note-see">
                    <h1><?= $current['name'] ?></h1>
                    <div class="desc">
                        <?= $current['text'] ?>
                    </div>
                </div>
                <a class="back" href="/notes/index.php">Powróć</a>
            <?php elseif ($_POST['action'] == "edit") : ?>
                <?php foreach ($aNotes as $note) {
                    if ($note['name'] == $_POST['name']) {
                        $current = $note;
                    }
                } ?>
                <div class="edit-note-form">
                    <form class="edit" action="/notes/index.php" method="post">
                        <input type="hidden" name="action" value="update"/>
                        <input type="hidden" name="id" value="<?= $current['id'] ?>"/>
                        <input type="text" name="title" value="<?= $current['name'] ?>"/>
                        <textarea name="description"><?= $current['text'] ?></textarea>
                        <button type="submit">Zapisz</button>
                    </form>
                </div>
                <a class="back" href="/notes/index.php">Powróć</a>
            <?php endif; ?>

        <?php else : ?>
            <div class="notes-list">
                <?php
                date_default_timezone_set("Europe/Warsaw");
                foreach ($aNotes as $note):
                    ?>
                    <div class="note">
                        <p><?= $note['name'] ?>&nbsp;<span
                                    class="modify"><?= date("Y-m-d G:i:s", $note['modify_timestamp']) ?></span></p>
                        <div class="forms-container">
                            <form action="/notes/index.php" method="post">
                                <input type="hidden" name="action" value="see"/>
                                <input type="hidden" name="name" value="<?= $note['name'] ?>"/>
                                <button type="submit">Zobacz</button>
                            </form>
                            <form action="/notes/index.php" method="post">
                                <input type="hidden" name="action" value="edit"/>
                                <input type="hidden" name="name" value="<?= $note['name'] ?>"/>
                                <button type="submit" class='edit'>Edytuj</button>
                            </form>
                            <form action="/notes/index.php" method="post">
                                <input type="hidden" name="action" value="delete"/>
                                <input type="hidden" name="name" value="<?= $note['name'] ?>"/>
                                <input type="hidden" name="id" value="<?= $note['id'] ?>"/>
                                <button type="submit" class='delete'>Usuń</button>
                            </form>
                        </div>
                    </div>


                <?php endforeach; ?>
            </div>
            <div class="new-note-form">
                <form action="/notes/index.php" method="post">
                    <input type="hidden" name="action" value="insert"/>
                    <input type="text" name="title" placeholder="Nazwa notatki"/>
                    <textarea name="description" placeholder="Treść"></textarea>
                    <button type="submit">Dodaj</button>
                </form>
            </div>

        <?php endif; ?>
    <?php else : ?>
        <form action="/notes/index.php" method="post" class="login-form">
            <input type="text" name="user" placeholder="login"/>
            <input type="password" name="pass" placeholder="hasło"/>
            <button type="submit">Zaloguj</button>
        </form>
    <?php endif; ?>
</div>
</body>
</html>

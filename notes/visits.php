<!DOCTYPE html>
<html>
<head>
   <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:500,700&amp;subset=latin-ext" rel="stylesheet">
</head>
<body>
<div class="main-container">
  

        <?php
        $conn = mysqli_connect('127.0.0.1', 'studiosp_notes', '<aA19?X!>', 'studiosp_notes');
        $conn->set_charset("utf8");
        $sql = "SELECT * FROM `visits`";
        $q = $conn->query($sql);
        for ($aNotes = array(); $row = $q->fetch_assoc(); $aNotes[] = $row) ;
        ?>
            <div class="notes-list">
                <?php
                date_default_timezone_set("Europe/Warsaw");
                foreach ($aNotes as $note):?>
      <p><strong>IP:</strong> <?=$note['ip']?> <?=$note['note'] ? "<strong>O:</strong> " . $note['note']:""?> </p>
                <?php endforeach; ?>
       
</div>
</body>
</html>

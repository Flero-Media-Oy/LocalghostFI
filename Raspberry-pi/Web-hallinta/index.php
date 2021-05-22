<!--Raspberry pi uudelleenkäynnistys -->
<html>
<head>
<title>RPI Hallinta</title>
 <meta charset="UTF-8">

<style  type="text/css">
body {background-color: #000;}
p {text-color: #FFF;}
h3 {color: #FF7200;}

</style>
</head>
<body>

<h3>RPI hallintapaneeli :3</h3>
<p>
<form action="reboot.php" method="get">
  <input type="submit" value="Uudelleen käynnistä">
</form>
</p>
 
 <p>
<form action="clear.php" method="get">
 <input type="submit" value='Tyhjennä "./Videos" kansio'>
</form>
</p>
 
 <?php
    $units = explode(' ', 'B KB MB GB TB PB');
    $SIZE_LIMIT = 31138496953; // 29GB
    $disk_used = foldersize("./Videos");

    $disk_remaining = $SIZE_LIMIT - $disk_used;

    echo("<p style='color: #FF7200;'>"); 
    echo('Kansiossa materiaalia: ' . format_size($disk_used) . '<br>');
    echo( 'Levyllä vapaatatilaa: ' . format_size($disk_remaining) . '<br><hr>');
    echo("</p>");


function foldersize($path) {
    $total_size = 0;
    $files = scandir($path);
    $cleanPath = rtrim($path, '/'). '/';

    foreach($files as $t) {
        if ($t<>"." && $t<>"..") {
            $currentFile = $cleanPath . $t;
            if (is_dir($currentFile)) {
                $size = foldersize($currentFile);
                $total_size += $size;
            }
            else {
                $size = filesize($currentFile);
                $total_size += $size;
            }
        }   
    }

    return $total_size;
}


function format_size($size) {
    global $units;

    $mod = 1024;

    for ($i = 0; $size > $mod; $i++) {
        $size /= $mod;
    }

    $endIndex = strpos($size, ".")+3;

    return substr( $size, 0, $endIndex).' '.$units[$i];
}

?>
 
</body>
</html>
<!--(c)2021 Atte / Mixerboy24 / LocalghostFI github@fleromedia.fi -->

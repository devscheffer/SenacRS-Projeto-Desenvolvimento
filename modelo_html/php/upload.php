<?php
$target_dir = "pdfs/";
$target_file = $target_dir . basename($_FILES["formFileMultiple"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Checa se o arquivo do upload é um arquivo do tipo imagem ou não
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["formFileMultiple"]["tmp_name"]);
  if($check !== false) {
    echo "Arquivo é uma imagem - " . $check["mime"] . ".";
    $uploadOk = 1;
    header("Location: tela_manual.php");
    exit();
  } else {
    echo "Arquivo não é uma imagem.";
    $uploadOk = 0;
    header("Location: tela_manual.php");
    exit();
  }
}
?>

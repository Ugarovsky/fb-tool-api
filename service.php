<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://fbtool.pro/api/get-accounts?key=HaT5OWT4NaW4BIXXb4VSBDch_0WNh93e");
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
$result = curl_exec($ch);

$accountArrayId = array();
$socialAccountData = array();
foreach (json_decode($result) as $value) {
    array_push($accountArrayId, $value->id);
}

$newResult = array();
for ($i = 0; count($accountArrayId) > $i; $i++){
$ch2 = curl_init();    
curl_setopt($ch2, CURLOPT_URL, "https://fbtool.pro/api/get-statistics?key=HaT5OWT4NaW4BIXXb4VSBDch_0WNh93e&account=". $accountArrayId[$i]);
curl_setopt($ch2, CURLOPT_HEADER, 0);
curl_setopt($ch2, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch2, CURLOPT_CONNECTTIMEOUT, 30);
$result2 = curl_exec($ch2);
$newResult[$accountArrayId[$i]] = $result2;
};

var_dump($accountArrayId);


?>

<script>
    const accounts = `<? echo $result ?>`;
    const accounts2 = JSON.parse('<?= addslashes(json_encode($newResult)) ?>');

</script>
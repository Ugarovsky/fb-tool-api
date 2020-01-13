<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://fbtool.pro/api/get-accounts?key=RSWkmPgoQzxWgV-ntwvgVRvolvG3KW0W");
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
$result = curl_exec($ch);

$accountArrayId = array();
$socialAccountData = array();
foreach (json_decode($result) as $value) {
    array_push($accountArrayId, $value->id);
}

$accountArrayId = array_reverse($accountArrayId);
    // http cycle  and push into the socialAccountData
    curl_setopt($ch, CURLOPT_URL, "https://fbtool.pro/api/get-adaccounts?key=RSWkmPgoQzxWgV-ntwvgVRvolvG3KW0W&account=" . $accountArrayId[0]);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
    $result = curl_exec($ch)

?>

<script>
    const accounts = `<? echo $result ?>`;
    const test = `<? echo $socialAccountData ?>`;
    console.log(test);
    document.cookie = `accounts=${accounts}`;
</script>
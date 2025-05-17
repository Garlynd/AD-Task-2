<?php
require_once '../../utils/Gear.util.php';
$gears = getGearData();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gear List</title>
    <link rel="stylesheet" href="../../assets/css/style.css">
    <link rel="stylesheet" href="assets/css/gearList.css">
</head>
<body>
    <?php include '../../components/nav.component.php'; ?>
    <main>
        <h1>Road Cycling Gear</h1>
        <div class="gear-list">
            <?php foreach ($gears as $gear): ?>
                <?php include '../../components/templates/gearCard.component.php'; ?>
            <?php endforeach; ?>
        </div>
        <a href="../../index.php" class="button">← Back to Home</a>
    </main>
</body>
</html>
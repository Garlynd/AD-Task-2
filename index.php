<?php
require_once 'utils/Gear.util.php';
$welcomeMessage = getWelcomeMessage();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php include 'components/nav.component.php'; ?>
    <main>
        <h1><?php echo $welcomeMessage; ?></h1>
        <p>Explore essential road cycling gear and performance equipment.</p>
        <a href="pages/gearList/index.php" class="button">View Gear List</a>
    </main>
    <script src="assets/js/script.js"></script>
</body>
</html>
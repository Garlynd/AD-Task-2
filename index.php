<?php
require_once 'utils/Gear.util.php';
$welcomeMessage = getWelcomeMessage();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cycling Gear</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <?php include '../../components/nav.component.php'; ?>

    <section class="hero">
        <div class="hero-content">
            <h1><?php echo $welcomeMessage; ?></h1>
            <p>High-performance road bikes, components, and gear made for speed and endurance.</p>
            <a href="pages/gearList/index.php" class="button">View Gear List</a>
        </div>
    </section>

    <main>
        <p>We’re passionate about road cycling and helping you find the right gear to ride faster and smarter.</p>
    </main>

    <script src="assets/js/script.js"></script>
</body>
</html>
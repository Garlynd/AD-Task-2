<?php
$teamHistory = [
    "Founded in 2018 by a group of passionate cyclists.",
    "Started as a local weekend group ride.",
    "Evolved into a competitive road cycling team by 2020.",
    "Won several regional events and charity races."
];

$milestones = [
    "First group ride" => "January 2018",
    "First race win" => "August 2020",
    "Expanded to 15 members" => "2022",
    "Partnered with SpeedRide Co." => "2023"
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - Road Cyclers</title>
    <link rel="stylesheet" href="../../assets/css/style.css">
    <link rel="stylesheet" href="../../pages/aboutUs/assets/css/style.css">
</head>
<body>
    <?php include '../../components/nav.component.php'; ?>

    <main class="about-container">
        <h1>Our Story</h1>
        <p>Welcome to Road Cyclers! Here's how we came to be:</p>

        <section>
            <h2>Team History</h2>
            <ul>
                <?php foreach ($teamHistory as $event): ?>
                    <li><?php echo $event; ?></li>
                <?php endforeach; ?>
            </ul>
        </section>

        <section>
            <h2>Key Milestones</h2>
            <table>
                <thead>
                    <tr>
                        <th>Milestone</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($milestones as $event => $year): ?>
                        <tr>
                            <td><?php echo $event; ?></td>
                            <td><?php echo $year; ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </section>
        <a href="../../index.php" class="button">← Back to Home</a>
    </main>
</body>
</html>
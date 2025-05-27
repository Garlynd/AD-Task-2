<a name="readme-top">

<br/>

<br />
<div align="center">
  <a href="https://github.com/Garlynd/">
  <!-- TODO: If you want to add logo or banner you can add it here -->
    <img src="./assets/img/ignite.png" alt="ignite" width="180" height="150">
  </a>
<!-- TODO: Change Title to the name of the title of your Project -->
  <h3 align="center">AD-Task-2</h3>
</div>
<!-- TODO: Make a short description -->
<div align="center">
The website, Road Cyclers, is dedicated to the passion of road cycling, stemming from a local weekend group ride that started in January 2018. It showcases its evolution into a competitive road cycling team by 2020, having won several regional events and charity races. The site also features information on high-performance road bikes, components, and gear designed for speed and endurance.
</div>

<br />

<!-- TODO: Change the zyx-0314 into your github username  -->
<!-- TODO: Change the WD-Template-Project into the same name of your folder -->

![](https://visit-counter.vercel.app/counter.png?page=zyx-0314/AD-CI4-Template-Project)

[![wakatime](https://wakatime.com/badge/user/018dd99a-4985-4f98-8216-6ca6fe2ce0f8/project/63501637-9a31-42f0-960d-4d0ab47977f8.svg)](https://wakatime.com/badge/user/018dd99a-4985-4f98-8216-6ca6fe2ce0f8/project/63501637-9a31-42f0-960d-4d0ab47977f8)

---

<br />
<br />

<!-- TODO: If you want to add more layers for your readme -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ol>
        <li>
          <a href="#key-components">Key Components</a>
        </li>
        <li>
          <a href="#technology">Technology</a>
        </li>
      </ol>
    </li>
    <li>
      <a href="#rule,-practices-and-principles">Rules, Practices and Principles</a>
    </li>
    <li>
      <a href="#resources">Resources</a>
    </li>
  </ol>
</details>

---

## Overview

<!-- TODO: To be changed -->
<!-- The following are just sample -->

- Data Handling
- Component Based Architechture
- Dynamic Content Reading

Description of the project in details.

### Technology

<!-- TODO: List of Technology Used -->
#### Language
![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)

## Rules, Practices and Principles

<!-- Do not Change this -->

1. Always use `AD-` in the front of the Title of the Project for the Subject followed by your custom naming.
2. Do not rename `.php` files if they are pages; always use `index.php` as the filename.
3. Add `.component` to the `.php` files if they are components code; example: `footer.component.php`.
4. Add `.util` to the `.php` files if they are utility codes; example: `account.util.php`.
5. Place Files in their respective folders.
6. Different file naming Cases
   | Naming Case | Type of code         | Example                           |
   | ----------- | -------------------- | --------------------------------- |
   | Pascal      | Utility              | Accoun.util.php                   |
   | Camel       | Components and Pages | index.php or footer.component.php |
8. Renaming of Pages folder names are a must, and relates to what it is doing or data it holding.
9. Use proper label in your github commits: `feat`, `fix`, `refactor` and `docs`
10. File Structure to follow below.

```
AD-Task-2
└─ assets
|   └─ css
|   |   └─ style.css
|   └─ img
|   |   └─ hero-bike.jpg
|   |   └─ ignite.png
└─ components
|   └─ nav.component.php
|   └─ templates
|      └─ gearCard.component.php
└─ pages
|  └─ aboutUs
|  |  └─ assets
|  |  |  └─ css
|  |  |  |  └─ style.css
|  |  |  └─ img
|  |  |  |  └─ helmet.jpg
|  |  |  └─ img
|  |  |  |  └─ tarmac.jpg
|  |  |  └─ img
|  |  |  |  └─ ultegra.jpg
|  |  └─ index.php
|  └─ aboutUs
|  |  └─ assets
|  |  |  └─ css
|  |  |  |  └─ style.css
|  |  |  └─ img
|  |  |  |  └─ team.jpg
|  |  └─ index.php
└─ utils
|   └─ Gear.util.php
└─ vendor
└─ .dockerignore
└─ .gitignore
└─ bootstrap.php
└─ compose.yaml
└─ composer.json
└─ composer.lock
└─ Dockerfile
└─ index.php
└─ readme.md
└─ router.php
```
> The following should be renamed: name.css, name.js, name.jpeg/.jpg/.webp/.png, name.component.php(but not the part of the `component.php`), Name.utils.php(but not the part of the `utils.php`)

## Resources

<!-- TODO: Add References -->

| Title    | Purpose                                                                                                   | Link                     |
| -------- | --------------------------------------------------------------------------------------------------------- | ------------------------ |
| Google   | To locate and gather images used as design assets and visual references during development.               | https://google.com        |
| ChatGPT  | Clarifying concepts, improving code structure, and exploring better implementation approaches.            | https://chat.openai.com/  |

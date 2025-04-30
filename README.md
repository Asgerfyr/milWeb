# milWeb
Dette er et sikkert og effektivt system til håndtering af troppebevægelser, der både beskytter følsomme data og giver brugerne den nødvendige indsigt?

## Installation

[GitHub Repository](https://github.com/Asgerfyr/milWeb/tree/milWeb)


<details>
  <summary>English</summary>
  
  1. Download zip of latest release
    <details>
      <summary>How to download zip</summary>
      
      1. Click on "Releases" in the right column of the GitHub page
      2. Click on the latest release
      3. Go to "Assets" and download "Source code (zip)"
    </details>
  2. Unpack zip
  3. Install xampp if not installed
    <details>
      <summary>How to install xampp</summary>
      
      1. Go to https://www.apachefriends.org/download.html
      2. Choose the correct version for your operation system
      3. Download the file
      4. Open the file and follow the instructions
  4. Start xampp and make a database called "milweb"
    <details>
      <summary>How to create a database in xampp</summary>
      
      1. Open the xampp control panel
      2. Click on the "Start" button next to Apache
      3. Click on the "Start" button next to MySQL
      4. Click on the "Admin" button next to MySQL
      5. Click on the "Databases" tab
      6. Create a new database by clicking on the "Create" button
      7. Name the database "milweb"
  5. Import `milweb.sql` into the database
    <details>
      <summary>How to import `milweb.sql` into the database</summary>
      
      1. Open the xampp control panel
      2. Click on the "Start" button next to Apache
      3. Click on the "Start" button next to MySQL
      4. Click on the "Admin" button next to MySQL
      5. Select the "milweb" database
      6. Click on the "Import" tab
      7. Click "Choose File" and select `milweb.sql`
      8. Click "Go" to start the import process
    </details>
  6. Install node.js if not installed
    <details>
      <summary>How to install node.js</summary>
      
      1. Visit the [Node.js website](https://nodejs.org) and download the latest LTS version
      2. Run the installer and follow the setup instructions
      3. Verify the installation by running `npm -v` in your terminal to check the installed version
    </details>
  7. Open a terminal in milWeb folder
  8. Run `npm install` in the terminal
  9. Enjoy milWeb

<details>
  <summary>Troubleshooting</summary>
  
  If you encounter any issues while using milWeb, please ensure that you are using Node.js version 10.8.2. You can switch to this version using nvm (Node Version Manager) with the following commands:

  ```bash
  nvm install 10.8.2
  nvm use 10.8.2
  ```

  After switching to the correct Node.js version, try running the server again.

</details>


</details>

<details> <summary>Dansk</summary>
Download zip-filen af den seneste udgivelse

<details> <summary>Sådan downloader du zip-filen</summary>
Klik på "Releases" i højre kolonne på GitHub-siden

Klik på den seneste udgivelse

Gå til "Assets" og download "Source code (zip)"

</details>
Udpak zip-filen

Installer XAMPP, hvis det ikke allerede er installeret

<details> <summary>Sådan installerer du XAMPP</summary>
Gå til https://www.apachefriends.org/download.html

Vælg den rigtige version til dit operativsystem

Download filen

Åbn filen og følg installationsvejledningen

</details>
Start XAMPP og opret en database ved navn "milweb"

<details> <summary>Sådan opretter du en database i XAMPP</summary>
Åbn XAMPP kontrolpanelet

Klik på "Start" ud for Apache

Klik på "Start" ud for MySQL

Klik på "Admin" ud for MySQL

Gå til fanen "Databases"

Indtast "milweb" som databasenavn og klik "Create"

</details>
Importér milweb.sql i databasen

<details> <summary>Sådan importerer du `milweb.sql`</summary>
Følg trinnene ovenfor for at åbne phpMyAdmin

Vælg databasen "milweb"

Klik på fanen "Import"

Klik "Vælg fil" og vælg milweb.sql

Klik "Go" for at starte importen

</details>
Installer Node.js, hvis det ikke er installeret

<details> <summary>Sådan installerer du Node.js</summary>
Gå til Node.js hjemmeside

Download den nyeste LTS-version

Kør installationsfilen og følg vejledningen

Tjek installationen med npm -v i terminalen

</details>
Åbn en terminal i mappen "milWeb"

Kør npm install i terminalen

Klar til brug!

<details> <summary>Fejlfinding</summary>
bash
Copy
Edit
Hvis du får fejl, skal du sikre, at du bruger Node.js version 10.8.2.  
Brug evt. nvm (Node Version Manager) til at skifte version:

```bash
nvm install 10.8.2
nvm use 10.8.2
```

Prøv derefter at starte serveren igen.
</details> </details>

# milWeb
Dette er et sikkert og effektivt system til håndtering af troppebevægelser, der både beskytter følsomme data og giver brugerne den nødvendige indsigt?

## Installation

[GitHub Repository](https://github.com/Asgerfyr/milWeb/tree/milWeb)


<details>
  <summary>English</summary>

  1. <details>
      <summary>Download zip of latest release</summary>
      <ol>
        <li>Click on "Releases" in the right column of the GitHub page</li>
        <li>Click on the latest release</li>
        <li>Go to "Assets" and download "Source code (zip)"</li>
      </ol></details>

  2. Unpack zip

  3. <details>
      <summary>Install XAMPP (if not installed)</summary>
      <ol>
        <li>Go to <a href="https://www.apachefriends.org/download.html">apachefriends.org</a></li>
        <li>Choose the correct version for your OS</li>
        <li>Download and run the installer</li>
        <li>Follow the installation instructions</li>
      </ol></details>

  4. <details>
      <summary>Start XAMPP and create a database called <code>milweb</code></summary>
      <ol>
        <li>Open the XAMPP control panel</li>
        <li>Start Apache and MySQL</li>
        <li>Click "Admin" next to MySQL</li>
        <li>Go to the "Databases" tab</li>
        <li>Create a new database named <code>milweb</code></li>
      </ol></details>

  5. <details>
      <summary>Import <code>milweb.sql</code> into the database</summary>
      <ol>
        <li>Go to phpMyAdmin (via XAMPP "Admin")</li>
        <li>Select the <code>milweb</code> database</li>
        <li>Click on the "Import" tab</li>
        <li>Choose the <code>milweb.sql</code> file</li>
        <li>Click "Go" to import</li>
      </ol></details>

  6. <details>
      <summary>Install Node.js (if not installed)</summary>
      <ol>
        <li>Go to the <a href="https://nodejs.org">Node.js website</a></li>
        <li>Download the latest LTS version</li>
        <li>Run the installer and follow the instructions</li>
        <li>Verify with <code>npm -v</code> in terminal</li>
      </ol></details>

  7. Open a terminal in the <code>milWeb</code> folder  
  8. Run <code>npm install</code>  
  9. Enjoy milWeb

  <details>
    <summary>Troubleshooting</summary>
    If you encounter issues, ensure you use Node.js version <code>10.8.2</code>. Use nvm:

    ```bash
    nvm install 10.8.2
    nvm use 10.8.2
    ```

  Then restart the server.
  </details>

</details>


<details>
  <summary>Dansk</summary>

  1. <details>
      <summary>Download zip af den seneste udgivelse</summary>
      <ol>
        <li>Klik på "Releases" i højre kolonne på GitHub-siden</li>
        <li>Klik på den seneste udgivelse</li>
        <li>Gå til "Assets" og download "Source code (zip)"</li>
      </ol></details>

  2. Udpak zip-filen

  3. <details>
      <summary>Installer XAMPP (hvis det ikke allerede er installeret)</summary>
      <ol>
        <li>Gå til <a href="https://www.apachefriends.org/download.html">apachefriends.org</a></li>
        <li>Vælg den korrekte version til dit styresystem</li>
        <li>Download og kør installationsfilen</li>
        <li>Følg installationsvejledningen</li>
      </ol></details>

  4. <details>
      <summary>Start XAMPP og opret en database kaldet <code>milweb</code></summary>
      <ol>
        <li>Åbn XAMPP kontrolpanelet</li>
        <li>Start Apache og MySQL</li>
        <li>Klik på "Admin" ved siden af MySQL</li>
        <li>Gå til fanen "Databases"</li>
        <li>Opret en ny database med navnet <code>milweb</code></li>
      </ol></details>

  5. <details>
      <summary>Importér <code>milweb.sql</code> til databasen</summary>
      <ol>
        <li>Gå til phpMyAdmin (via XAMPP "Admin")</li>
        <li>Vælg databasen <code>milweb</code></li>
        <li>Klik på fanen "Import"</li>
        <li>Vælg filen <code>milweb.sql</code></li>
        <li>Klik på "Go" for at importere</li>
      </ol></details>

  6. <details>
      <summary>Installer Node.js (hvis det ikke allerede er installeret)</summary>
      <ol>
        <li>Gå til <a href="https://nodejs.org">Node.js hjemmeside</a></li>
        <li>Download den nyeste LTS-version</li>
        <li>Kør installationsfilen og følg vejledningen</li>
        <li>Bekræft med <code>npm -v</code> i terminalen</li>
      </ol></details>

  7. Åbn en terminal i <code>milWeb</code>-mappen  
  8. Kør <code>npm install</code>  
  9. Nyd milWeb

  <details>
    <summary>Fejlfinding</summary>
    Hvis du oplever problemer, så sørg for at bruge Node.js version <code>10.8.2</code>. Brug nvm:

    ```bash
    nvm install 10.8.2
    nvm use 10.8.2
    ```

    Genstart derefter serveren.
  </details>

</details>

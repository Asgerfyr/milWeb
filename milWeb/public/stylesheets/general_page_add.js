* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: myfont;
  src: url(Optien.ttf);
}

html,
body {
  height: 100%;
  background-color: #5e631f;
  color: #e1d798;
}

section {
  padding: 10px 0;
}

h1 {
  margin-bottom: 5px;
  font-size: 50px;
}

header {
  text-align: center;
  margin-bottom: 10px;
}

label {
  align-self: flex-start;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 20px;
  color: #333;
}



/*Troop list and information styling*/
.container {
  display: flex;
  height: 80vh;
  overflow: hidden;
}

.troop-list {
  width: 30%;
  height: 100%;
  overflow-y: auto;
  padding: 0 20px;
  background-color: #4c4f1a;
  position: relative;
}

#troop-data {
  width: 100%;
  border-collapse: separate;
  color: #e1d798;
}

#troop-data td {
  padding: 8px 12px;
  border: 1px solid #ddd;
}

#troop-data thead {
  background-color: #444;
  color: #fff;
}

#troop-data tr:nth-child(even) {
  background-color: #333;
}

#troop-data th {
  position: sticky;
  top: 0;
  background-color: #4c4f1a;
  z-index: 2;
  padding: 12px;
  font-size: 24px;
  border: 2px solid #ddd;
  text-align: left;
}


#troop-data a.info-link {
  color: #ffdd57;
  text-decoration: underline;
  cursor: pointer;
}


.info-panel {
  width: 70%;
  height: 100%;
  overflow-y: auto;
  background-color: #2f3112;
  padding: 20px;
  box-sizing: border-box;
}

.info-panel h2 {
  font-size: 36px;
  margin-bottom: 15px;
  color: #e1d798;
}

#info-content {
  font-size: 18px;
  color: #e1d798;
  white-space: pre-wrap; /* Keep line breaks */
}

#troop-data tr.info-row {
  cursor: pointer;
  transition: background-color 0.2s ease;
}

#troop-data tr.info-row:hover {
  background-color: #555;
}

.page-nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  background-color: #333;
  padding: 10px 20px;
  border-bottom: 2px solid #888;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.page-nav .nav-link {
  color: #e1d798;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  padding: 5px 10px;
  transition: all 0.3s ease;
}

.page-nav .nav-link:hover {
  color: #fff;
  text-shadow: 0 0 5px #e1d798;
}





form#add-troop-form {
  margin-top: 20px;
  background-color: #444;
  padding: 15px;
  border-radius: 8px;
}

form#add-troop-form input,
form#add-troop-form textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  font-size: 16px;
  background-color: #222;
  color: #e1d798;
  border: 1px solid #666;
  border-radius: 4px;
}

form#add-troop-form button {
  background-color: #888;
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

form#add-troop-form button:hover {
  background-color: #aaa;
}

form#add-troop-form label {
  color: #e1d798;
}

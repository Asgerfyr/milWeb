class addPosition{
    constructor({id, lat,lng,type}, map){
        this.lat=lat;
        this.lng=lng;
        this.type=type.toLowerCase();
        this.map=map;
        this.id = id;

        this.layer = this.addShape();
        this.addToMap();
    }

    addShape(){
        const latlng = [this.lat, this.lng];

        switch(this.type){
            case "enemy":
                return L.circle(latlng, {
                    color: 'red',
                    fillOpacity: 0.1,
                    radius: 500
                });
            case "friendly":
                return L.circle(latlng, {
                    color: 'blue',
                    fillOpacity: 0.1,
                    radius: 500
                });
            case "hq":
                return L.circle(latlng, {
                    color: 'green',
                    fillOpacity: 0.1,
                    radius: 500
                });
            default:
                return L.circle(latlng, {
                    color: 'purple',
                    fillOpacity: 0.1,
                    radius: 500
                });
        }
    }

    addToMap() {
        this.layer.addTo(this.map).bindPopup(`${this.type.toUpperCase()} | id: ${this.id}`).openPopup();
    }

    remove() {
        this.map.removeLayer(this.layer);
    }
}


var map = L.map('map').setView([51.505, -0.09], 8);

//Map that is dark and looks more tactical
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CartoDB</a>',
    maxZoom: 19
  }).addTo(map);


  const positionsById = {}; // Store positions by ID for reference

  fetch('javascripts/data.json')
      .then(response => response.json())
      .then(data => {
          const tbody = document.querySelector('#troop-data tbody');
          tbody.innerHTML = '';
  
          data.sort((a, b) => a.type.localeCompare(b.type));
  
          data.forEach(position => {
              const { id, lat, lng, type } = position;
  
              const marker = new addPosition({ id, lat, lng, type }, map);
              positionsById[id] = marker; // Save marker by ID
  
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${type.toUpperCase()}</td>
                  <td>${id}</td>
                  <td>${lat.toFixed(4)}</td>
                  <td>${lng.toFixed(4)}</td>
              `;
  
              row.style.cursor = "pointer"; // Optional: visual cue
              row.addEventListener('click', () => {
                  const marker = positionsById[id];
                  if (marker) {
                      marker.layer.openPopup();
                      map.setView([marker.lat, marker.lng], 10); // Optional: zoom in
                  }
              });
  
              tbody.appendChild(row);
          });
      })
      .catch(error => {
          console.error('Error loading troop data:', error);
          document.getElementById('troop-data').innerHTML = '<tr><td colspan="4">Error loading data</td></tr>';
      });
  

class addPosition{
    constructor({lat,lng,type}, map){
        this.lat=lat;
        this.lng=lng;
        this.type=type.toLowerCase();
        this.map=map;

        this.layer = this.addShape();
        this.addToMap();
    }

    addShape(){
        const latlng = [this.lat, this.lng];

        switch(this.type){
            case "enemy":
                return L.circle(latlng, {
                    color: 'red',
                    fillOpacity: 0.5,
                    radius: 500
                });
            case "friendly":
                return L.circle(latlng, {
                    color: 'blue',
                    fillOpacity: 0.5,
                    radius: 500
                });
            case "hq":
                return L.circle(latlng, {
                    color: 'green',
                    fillOpacity: 0.5,
                    radius: 500
                });
            default:
                return L.marker(latlng);
        }
    }

    addToMap() {
        this.layer.addTo(this.map).bindPopup(`${this.type.toUpperCase()} Position`);
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

const positionsById = {}


fetch('javascripts/data.json')
    .then(response => response.json())
    .then(data => {

        console.log(data);

        const tbody = document.querySelector('#troop-data tbody');
        tbody.innerHTML = ''; // Clear loading row

        data.forEach(position => {
            const { id, lat, lng, type } = position;
        
            new addPosition({ lat, lng, type }, map);
        
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${type.toUpperCase()}</td>
                <td>${id}</td>
                <td>${lat.toFixed(4)}</td>
                <td>${lng.toFixed(4)}</td>
            `;
            tbody.appendChild(row);
        });        
    })
    .catch(error => {
        console.error('Error loading troop data:', error);
        document.getElementById('troop-data').innerHTML = '<li>Error loading data</li>';
    });

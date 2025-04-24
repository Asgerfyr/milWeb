class addPosition {
    constructor({ id, lat, lng, type, size }, map) {
      this.lat = lat;
      this.lng = lng;
      this.type = type.toLowerCase();
      this.map = map;
      this.id = id;
      this.size = size;
  
      this.normalizedType = this.getNormalizedType(); // 'enemy', 'friendly', 'hq', or 'other'
  
      this.layer = this.addShape();
      this.addToMap();
    }
  
    getNormalizedType() {
      const knownTypes = ['enemy', 'friendly', 'hq'];
      return knownTypes.includes(this.type) ? this.type : 'other';
    }
  
    addShape() {
      const latlng = [this.lat, this.lng];
  
      switch (this.normalizedType) {
        case "enemy":
          return L.circle(latlng, {
            color: 'red',
            fillOpacity: 0.1,
            radius: this.size
          });
        case "friendly":
          return L.circle(latlng, {
            color: 'blue',
            fillOpacity: 0.1,
            radius: this.size
          });
        case "hq":
          return L.circle(latlng, {
            color: 'green',
            fillOpacity: 0.1,
            radius: this.size
          });
        case "other":
        default:
          return L.circle(latlng, {
            color: 'purple',
            fillOpacity: 0.1,
            radius: this.size
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
  
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CartoDB</a>',
    maxZoom: 19
  }).addTo(map);
  
  const markersByType = {
    enemy: [],
    friendly: [],
    hq: [],
    other: []
  };
  
  fetch('/general/get_data')
    .then(response => response.json())
    .then(data => {
      const tbody = document.querySelector('#troop-data tbody');
      tbody.innerHTML = '';
  
      const filterContainer = document.querySelector('.filter-controls');
      filterContainer.innerHTML = '';
  
      // Create checkboxes
      ['enemy', 'friendly', 'hq', 'other'].forEach(type => {
        const label = document.createElement('label');
        label.style.marginRight = '15px';
        label.innerHTML = `
          <input type="checkbox" class="filter" value="${type}" checked> ${type.charAt(0).toUpperCase() + type.slice(1)}
        `;
        filterContainer.appendChild(label);
      });

      data.sort((a, b) => a.type.localeCompare(b.type));
  
      // Place all markers and create table
      data.forEach(position => {
        const marker = new addPosition(position, map);
        const normalizedType = marker.getNormalizedType();
        markersByType[normalizedType].push(marker.layer);
  
        const { id, lat, lng, type } = position;
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${type.toUpperCase()}</td>
          <td>${id}</td>
          <td>${lat.toFixed(4)}</td>
          <td>${lng.toFixed(4)}</td>
        `;
  
        row.style.cursor = "pointer";
        row.addEventListener('click', () => {
          marker.layer.openPopup();
          map.setView([lat, lng], 10);
        });
  
        tbody.appendChild(row);
      });
  
      setupFilterHandlers();
    })
    .catch(error => {
      console.error('Error loading troop data:', error);
    });
  
  function setupFilterHandlers() {
    document.querySelectorAll('.filter').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const type = checkbox.value;
        const isChecked = checkbox.checked;
  
        if (markersByType[type]) {
          markersByType[type].forEach(layer => {
            if (isChecked) {
              map.addLayer(layer);
            } else {
              map.removeLayer(layer);
            }
          });
        }
      });
    });
  }

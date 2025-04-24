fetch('javascripts/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const tbody = document.querySelector('#troop-data tbody');
    const infoBox = document.getElementById('info-box');
    const infoContent = document.getElementById('info-content');
    tbody.innerHTML = ''; // Clear loading row

    data.sort((a, b) => a.type.localeCompare(b.type));

    data.forEach(position => {
        const { type, id, size, danger_level, Information } = position;
      
        const row = document.createElement('tr');
        row.classList.add('info-row');
        row.dataset.id = id;
        row.dataset.info = encodeURIComponent(Information);
        row.dataset.type = type;
        row.dataset.size = size;
        row.dataset.danger = danger_level;
      
        row.innerHTML = `
          <td>${type.toUpperCase()}</td>
          <td>${id}</td>
        `;
      
        tbody.appendChild(row);
      });
      

      tbody.addEventListener('click', (e) => {
        let row = e.target.closest('tr.info-row');
        if (row) {
          const id = row.dataset.id;
          const type = row.dataset.type;
          const size = row.dataset.size;
          const danger = row.dataset.danger;
          const infoText = decodeURIComponent(row.dataset.info);
      
          infoContent.innerHTML = `
            <h3>ID: ${id}</h3>
            <p><strong>Size:</strong> ${size}</p>
            <p><strong>Danger Level:</strong> ${danger}</p>
            <hr>
            <p>${infoText}</p>
          `;
        }
      });
  })
  .catch(error => {
    console.error('Error loading troop data:', error);
    document.getElementById('troop-data').innerHTML = '<li>Error loading data</li>';
  });

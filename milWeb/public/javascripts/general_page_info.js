fetch('javascripts/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const tbody = document.querySelector('#troop-data tbody');
    const infoBox = document.getElementById('info-box');
    const infoContent = document.getElementById('info-content');
    tbody.innerHTML = ''; // Clear loading row

    data.forEach(position => {
      const { type, id, size, danger_level, Information } = position;

      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${type.toUpperCase()}</td>
        <td><a href="#" class="info-link" data-info="${encodeURIComponent(Information)}">${id}</a></td>
        <td>${size}</td>
        <td>${danger_level}</td>
      `;

      tbody.appendChild(row);
    });

    tbody.addEventListener('click', (e) => {
      if (e.target.classList.contains('info-link')) {
        e.preventDefault();
        const infoText = decodeURIComponent(e.target.dataset.info);
        infoContent.textContent = infoText;
        infoBox.style.display = 'block';
      }
    });
  })
  .catch(error => {
    console.error('Error loading troop data:', error);
    document.getElementById('troop-data').innerHTML = '<li>Error loading data</li>';
  });

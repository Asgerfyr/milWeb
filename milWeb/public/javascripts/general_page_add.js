fetch('/general/get_data')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const tbody = document.querySelector('#troop-data tbody');
    tbody.innerHTML = ''; // Clear loading row

    data.sort((a, b) => a.type.localeCompare(b.type));

    data.forEach(position => {
        const { type, id} = position;
      
        const row = document.createElement('tr');
        row.dataset.id = id;
        row.dataset.type = type;
      
        row.innerHTML = `
          <td>${type.toUpperCase()}</td>
          <td>${id}</td>
        `;
      
        tbody.appendChild(row);
      });
  })
  .catch(error => {
    console.error('Error loading troop data:', error);
    document.getElementById('troop-data').innerHTML = '<li>Error loading data</li>';
  });




async function submitForm(e) {
  e.preventDefault();

  const data = {
    type: document.getElementById('type').value,
    id: document.getElementById('id').value,
    latitude: document.getElementById('latitude').value,
    longitude: document.getElementById('longitude').value,
    size: document.getElementById('size').value,
    Information: document.getElementById('info').value
  };

  fetch('/general/add_data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => {
    if (res.ok) {
      alert('Troop info added!');
      document.getElementById('troop-form').reset();
    } else {
      throw new Error('Failed to add troop info.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error sending troop data.');
  });
}
  

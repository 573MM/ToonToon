function addCartoonsToItem(itemId, data, numberOfRounds) {
    const cartoonList = document.getElementById(itemId);
  
    for (let i = 0; i < numberOfRounds && i < data.Cartoon.length; i++) {
      const cartoon = data.Cartoon[i];
  
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <a href="cartoon.html?cid=${cartoon.cID}">
          <div class="cartoonBox">
            <img src="${cartoon.img_path}" alt="${cartoon.CName}">
            <div class="info">
              <p>${cartoon.CName}</p>
            </div>
          </div>
        </a>
      `;
      cartoonList.appendChild(listItem);
    }
  }
  function getRandomCartoons(data, numberOfRounds, itemId) {
    const cartoonList = document.getElementById(itemId);
    const shuffledCartoons = shuffleArray(data.Cartoon).slice(0, numberOfRounds);
  
    for (let i = 0; i < shuffledCartoons.length; i++) {
      const cartoon = shuffledCartoons[i];
  
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <a href="cartoon.html?cid=${cartoon.cID}">
          <div class="cartoonBox">
            <img src="${cartoon.img_path}" alt="${cartoon.CName}">
            <div class="info">
              <p>${cartoon.CName}</p>
            </div>
          </div>
        </a>
      `;
      cartoonList.appendChild(listItem);
    }
  }
  
  function shuffleArray(array) {
    // Fisher-Yates (Knuth) Shuffle
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Fetch data again and add cartoons to the second item with a different number of rounds
  fetch('cartoon.json')
    .then(response => response.json())
    .then(data => getRandomCartoons(data, 6, 'item1')) // Change the number of rounds as needed
    .catch(error => console.error('Error fetching data:', error));
  // Fetch data and add cartoons to the first item with 6 rounds
  fetch('cartoon.json')
    .then(response => response.json())
    .then(data => addCartoonsToItem('item2', data, 6))
    .catch(error => console.error('Error fetching data:', error));
  
  
fetch('cartoon.json')
    .then(response => response.json())
    .then(data => addCartoonsToItem('item3', data, 14)) // Change the number of rounds as needed
    .catch(error => console.error('Error fetching data:', error));
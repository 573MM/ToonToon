document.addEventListener('DOMContentLoaded', function () {
    const cartoonDetailsContainer = document.getElementById('cartoonDetails');
  
    // Get the value of cid from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const cid = urlParams.get('cid');
  
    if (cid) {
      // Fetch data from data.json
      fetch('cartoon.json')
        .then(response => response.json())
        .then(data => {
          // Find the cartoon with the matching cid
          const cartoon = data.Cartoon.find(cartoon => cartoon.cID.toString() === cid.toString());
  
          if (cartoon) {
            // Display cartoon details
            const cartoonDetails = `
            <div class="cartoon_info"> 
                <div class="column1">
                    <img src="${cartoon.img_path}" alt="${cartoon.CName}">
                </div>
                <div class="column2">
                        <h2 class="title">${cartoon.CName}</h2>
                        <p class="synopsis" style="font-size: 16px;">${cartoon.Description}</p>
                        <p class="author_relative" style="font-size: 24px;">ผู้เขียน : ${cartoon.UID}</p>
                        <div class="genre_area">
                            <br>
                            <br>
                            <div class="genre">
                                <p class="genre_button">${cartoon.Genre}</p>
                            </div>
                        </div>
                    
                </div>
            </div>  
            `;
            cartoonDetailsContainer.innerHTML = cartoonDetails;
          } else {
            // If no cartoon with the matching cid is found
            cartoonDetailsContainer.innerHTML = '<p>Cartoon not found</p>';
          }
        })
        .catch(error => console.error('Error fetching data:', error));
    } else {
      // If cid is not provided in the URL
      cartoonDetailsContainer.innerHTML = '<p>Invalid URL</p>';
    }
  });
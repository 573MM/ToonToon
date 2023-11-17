document.addEventListener('DOMContentLoaded', function () {
    const chapterListContainer = document.querySelector('.chapter_list');
  
    // Get the value of cid from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const cid = urlParams.get('cid');
  
    if (cid) {
      // Fetch data from data.json
      fetch('cartoon.json')
        .then(response => response.json())
        .then(data => {
          // Find chapters with the matching CID
          const chapters = data.Chapter.filter(chapter => chapter.CID.toString() === cid.toString());
  
          // Display chapters in the HTML
          chapters.forEach(chapter => {
            const chapterListItem = document.createElement('li');
            chapterListItem.innerHTML = `
              <a href="chapter.html?chapID=${chapter.ChapID}">
                  <div class="chapter_box">
                      <img src="${chapter.img_path}">
                      <div class="chapter_info">
                          <div class="name_chapter">
                              <p>${chapter.Title}</p>
                          </div>
                          <div class="number_chapter">
                              <p>#${chapter.ChapID}</p>
                          </div>
                      </div>
                  </div>
              </a>
            `;
            chapterListContainer.appendChild(chapterListItem);
          });
        })
        .catch(error => console.error('Error fetching data:', error));
    } else {
      // If cid is not provided in the URL
      chapterListContainer.innerHTML = '<p>No CID provided</p>';
    }
  });
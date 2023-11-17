document.addEventListener('DOMContentLoaded', function () {
    const chapterImagesContainer = document.querySelector('.chapter-images');
  
    // Get the value of chapId from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const chapId = urlParams.get('chapID');
  
    if (chapId) {
      // Fetch data from data.json
      fetch('cartoon.json')
        .then(response => response.json())
        .then(data => {
          // Find images with the matching ChapID
          const chapterImages = data.Chapter_img.filter(img => img.ChapID.toString() === chapId.toString());
  
          // Display images in the HTML
          chapterImages.forEach(image => {
            const imageElement = document.createElement('img');
            imageElement.src = image.img_path;
            chapterImagesContainer.appendChild(imageElement);
          });
        })
        .catch(error => console.error('Error fetching data:', error));
    } else {
      // If chapId is not provided in the URL
      chapterImagesContainer.innerHTML = '<p>No ChapID provided</p>';
    }
  });
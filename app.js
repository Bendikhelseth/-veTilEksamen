const button = document.querySelector('.btn');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
  const imageContainer = document.createElement('div');
  imageContainer.id = 'imageContainer';
  imageContainer.classList.add('image-container');
  container.appendChild(imageContainer);

  fetch('https://picsum.photos/v2/list')
    .then(response => response.json())
    .then(data => {
      const randomImage = data[Math.floor(Math.random() * data.length)];
      const imageElement = document.createElement('img');
      imageElement.src = randomImage.download_url;
      imageContainer.innerHTML = '';
      imageContainer.appendChild(imageElement);
    })
    .catch(error => {
      console.log('An error occurred:', error);
    });
});
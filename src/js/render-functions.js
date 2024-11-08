import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderImages(images) {
  const galleryElement = document.querySelector('.gallery');
  galleryElement.innerHTML = '';
  function showLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'block';
  }
  function hideLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  }
  showLoader();
  setTimeout(() => {
    images.forEach(image => {
      const imgElement = document.createElement('div');
      imgElement.classList.add('image-card');
      imgElement.innerHTML = `
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="img-details">
     <div class="coms"> <p>Likes</p> ${image.likes}</div>
      <div class="coms"><p>Views</p> ${image.views}</div>
      <div class="coms"><p>Comments</p> ${image.comments}</div>
      <div class="coms"><p>Downloads</p> ${image.downloads}</div>
      </div>
    `;
      galleryElement.appendChild(imgElement);
    });

    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    lightbox.refresh();
    hideLoader();
  }, 2000);
}

export function renderError(error) {
  iziToast.error({
    title: 'Error',
    message: error.message,
    position: 'topRight',
    timeout: 5000,
  });
}

export function clearError() {
  iziToast.hide({}, 'all');
}

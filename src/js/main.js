import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './pixabay-api.js';
import { renderImages, renderError } from './render-functions.js';

const form = document.querySelector('#form');

form.addEventListener('submit', async event => {
  event.preventDefault();
  function showLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'block';
  }
  function hideLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  }
  const query = event.target.elements.query.value.trim();
  if (!query) {
    showLoader();
    setTimeout(() => {
      iziToast.error({
        title: 'Sorry,',
        message:
          'there are no images matching your search query. Please, try again!',
        position: 'topRight',
        timeout: 3000,
      });
      hideLoader();
    }, 2000);
    return;
  }

  try {
    const images = await fetchImages(query);
    renderImages(images);
  } catch (error) {
    renderError(error);
  }
});

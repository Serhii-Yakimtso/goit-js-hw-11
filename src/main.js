// imports
import getPictures from './js/pixabay-api';
import renderGallery from './js/render-function';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import errorIcon from './img/error.svg';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery-list');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// search pictures
searchForm.addEventListener('submit', handleSearch);

function handleSearch(e) {
  e.preventDefault();

  deleteGallery();

  visibleLoader();

  const form = e.target;
  const searchTag = form.elements.tag.value;

  getPictures(searchTag)
    .then(res => {
      if (res.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fafafb',
          messageSize: '16px',

          iconUrl: errorIcon,

          position: 'topRight',
          backgroundColor: '#ef4040',
        });
      } else {
        renderGallery(res, gallery);
        hiddenLoader();
        lightbox.refresh();
      }
    })
    .catch(err => console.log(err));
}

function deleteGallery() {
  gallery.innerHTML = '';
  gallery.classList.add('hidden');
}

function visibleLoader() {
  loader.classList.remove('hidden');
}

function hiddenLoader() {
  loader.classList.add('hidden');
}

// event on gallery
gallery.addEventListener('click', handleLinkClick);

function handleLinkClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
}

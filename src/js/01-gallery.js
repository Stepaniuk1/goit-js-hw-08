import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

galleryItems.forEach(function (item) {
  let imgSrc = item.preview;
  let imgAlt = item.description;
  let imgDataS = item.original;

  const template = `<li class="gallery__item">
  <a class="gallery__link" href="${imgDataS}">
    <img
      class="gallery__image"
      src="${imgSrc}"
      alt="${imgAlt}"
      data-source="${imgDataS}"
    />
  </a>
</li>`;

  gallery.innerHTML += template;
});

const instance = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: `alt`,
  captionDelay: 250,
});

// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

galleryItems.forEach(function (item) {
  let imgAtt = item.original;

  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = imgAtt;

  const image = document.createElement('img');
  image.setAttribute('data-source', `${imgAtt}`);
  image.alt = item.description;
  image.classList.add('gallery__image');
  image.src = item.preview;

  link.appendChild(image);
  listItem.appendChild(link);
  gallery.appendChild(listItem);
});

function galleryOpen(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

  const instance = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: `alt`,
    captionDelay: 250,
  });

  instance.open();
}

gallery.addEventListener('click', galleryOpen);

// Change code below this line

console.log(galleryItems);

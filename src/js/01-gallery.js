import { galleryItems } from './gallery-items.js';
// // // Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(SimpleLightbox)

const gallery = document.querySelector(".gallery")

const galleryImg = galleryItems.map(({ preview, original, description }) =>
  `<li>
    <a class="gallery__item" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
   alt="${description}" />
</a>
</li>`
).join("")

gallery.innerHTML = galleryImg

const options = {
    captionsData: 'alt',
    captionDelay: 250,
};

new SimpleLightbox('.gallery a', options);
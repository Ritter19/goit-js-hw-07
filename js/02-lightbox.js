import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector("ul.gallery");

const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(array) {
  return array
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

// Initialize SimpleLightbox
const galleryHandler = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

galleryHandler.on("show.simplelightbox");

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// =============================  Создание разметки - НАЧАЛО

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source= ${original}
      alt=${description}
      title=${description}
    />
  </a>
    `;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

// =============================== Создание разметки - КОНЕЦ

//================ Модальное окно

const modal = new SimpleLightbox(".gallery a", { captionDelay: 250 });

// ============ Отмена действия по умолчанию - для ссылки

const refEl = document.querySelector(".gallery__item");
refEl.addEventListener("click", refElPreventDefault);

function refElPreventDefault(e) {
  e.preventDefault();
}

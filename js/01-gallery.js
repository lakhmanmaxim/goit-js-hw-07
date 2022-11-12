import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// =============================  Создание разметки - НАЧАЛО
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src= ${preview}
      data-source= ${original}
      alt= ${description}
    />
  </a>
</div>
    `;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

// =============================== Создание разметки - КОНЕЦ

//

// ============ Функции модального окна

galleryContainer.addEventListener("click", onGalleryContainerClick);

const refEl = document.querySelector(".gallery__link");
refEl.addEventListener("click", refElPreventDefault);

function refElPreventDefault(e) {
  e.preventDefault();
}

// ============

function onGalleryContainerClick(event) {
  refElPreventDefault(event);

  const refOriginalImage = event.target.dataset.source;
  // console.log(refOriginalImage);

  createModal(refOriginalImage);
}

function createModal(source) {
  const modal = basicLightbox.create(`
    <div class="modal">
        <img
      class="gallery__image"
      src="${source}"
      data-source="${source}"
      alt=""
    />
    </div>
`);

  modal.show();

  const openModal = document.querySelector(".modal");
  openModal.addEventListener("click", closeModal);

  function closeModal(e) {
    modal.close();
  }
}

import { refs } from "./refs";

export function renderGallery(images) {
    const markupGallery = images.map((image) => {
        return `<div class="img-card">
    <li class="gallery-item">
    <a class="gallery-link" href="${image.largeImageURL}">
    <img
        class="gallery-image"
        src="${image.webformatURL}"
        alt="${image.tags}"
        width=360
    />
    </a>
    </div>
    <div class="img-body">
    <h3 class="subtitle">'${image.likes}'<h3 class="subtitle">
    <h3 class="subtitle">'${image.views}'<h3 class="subtitle">
    <h3 class="subtitle">'${image.comments}'<h3 class="subtitle">
    <h3 class="subtitle">'${image.downloads}'<h3 class="subtitle">
    </div>
    </a>
    </li>`;
    }).join();

    refs.imagesElem.innerHTML = markupGallery;
}
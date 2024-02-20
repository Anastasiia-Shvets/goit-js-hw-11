import { refs } from "./refs";

export function renderGallery(data) {
    const markupGallery = data.map((image) => {
        console.log(data);
        return `<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${image.largeImageURL}">
    <img
        class="gallery-image"
        src="${image.webformatURL}"
        alt="${image.tags}"
        title=""
        width=360
    />
    </a>
    <p class="item-text">Likes: ${image.likes}</p>
    <p class="item-text">Views: ${image.views}</p>
    <p class="item-text">Comments: ${image.comments}</p>
    <p class="item-text">Downloads: ${image.downloads}</p>
    </div>
    </a>
    </li>
    </div>`;
    }).join('');

    refs.imagesElem.innerHTML = markupGallery;


    // const gallery = new SimpleLightbox('#gallery a');
    // gallery.refresh();
} 
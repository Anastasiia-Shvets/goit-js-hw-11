import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './refs';

export function renderGallery(data) {
    const markupGallery = data
        .map(image => {
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
    <div class="gallery-info">
    <p class="item-text">Likes: ${image.likes}</p>
    <p class="item-text">Views: ${image.views}</p>
    <p class="item-text">Comments: ${image.comments}</p>
    <p class="item-text">Downloads: ${image.downloads}</p>
    </div>
    </div>
    </li>`;
        })
        .join('');

    refs.imagesElem.innerHTML = markupGallery;


    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
}

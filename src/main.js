import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
import { searchGallery } from './js/pixabay-api';

const refs = {
    formElem: document.querySelector('.form'),
    inptElem: document.querySelector('.text-form'),
    imagesElem: document.querySelector('.gallery'),
};

const images = [];

refs.formElem.addEventListener('submit', ev => {
    ev.preventDefault();
    const query = ev.target.elements.query.value.trim();

    if (query === '') {
        iziToast.error({
            title: 'Sorry',
            message: 'Please enter text to search for.',
            position: 'topRight',
        });
        return;
    }
    searchGallery(query)
        .then(data => {
            if (data.length === 0) {
                iziToast.warning({
                    title: 'Sorry',
                    message:
                        'There are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
            } else {
                renderGallery(data);
                console.log(data);
            }
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message:
                    'An error occurred while fetching images. Please try again later.',
                position: 'topRight',
            });
            console.log(error);
        });
    ev.target.reset();
});

function galleryTemplate(image) {
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
}
function renderGallery(images) {
    const markupGallery = galleryTemplate(images);
    refs.imagesElem.innerHTML = markupGallery;
}








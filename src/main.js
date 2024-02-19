import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";


const refs = {
    formElem: document.querySelector('.form'),
    imgElem: document.querySelector('.text-form'),
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


function searchGallery(userVelue) {
    const apiKey = '42280765-41e7252ac679e023dc9db9847';
    const query = userVelue;
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const PARAMS = `?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
    const url = BASE_URL + END_POINT + PARAMS;

    return fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.status);
            }
        })
        .catch(error => {
            console.error(
                'There has been a problem with your fetch operation:',
                error
            );
        });
}


function galleryTemplate(image) {
    return `<div class="conteiner gallery">
    <div class="img-card">
    <ul class="gallery-card">
    <li class="gallery-item">
    <a class="gallery-link" href="${image.largeImageURL}">
    <img
        class="gallery-image"
        src="${image.webformatURL}"
        alt="${image.tags}"
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
    </li>
    </ul>
    </div>`;
}

function renderGallery(images) {
    const markup = galleryTemplate(images);
    refs.imgElem.innerHTML = markup;
}


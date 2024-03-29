import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchGallery } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import { refs } from './js/refs';

refs.loadElem.style.display = 'none';

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

    refs.loadElem.style.display = 'block';
    
    searchGallery(query)
        .then(data => {
            
            refs.loadElem.style.display = 'none';

            if (data.length === 0) {
                iziToast.warning({
                    title: 'Sorry',
                    message:
                        'There are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
            } else {
                renderGallery(data);
            }
        })
        .catch(error => {

            refs.loadElem.style.display = 'none';
            
            iziToast.error({
                title: 'Error',
                message:
                    'An error occurred while fetching images. Please try again later.',
                position: 'topRight',
            });
            (error);
        });
    ev.target.reset();
});







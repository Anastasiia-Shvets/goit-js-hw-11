export function searchGallery(userVelue) {
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

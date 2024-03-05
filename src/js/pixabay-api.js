// функції для HTTP-запитів

export default function getPictures(name) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '42676798-23985956bba61249a12f13dde';

  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch =true`
  ).then(res => {
    if (!res.ok) {
      throw new Error(`Error ${res.statusText}`);
    }

    return res.json();
  });
}

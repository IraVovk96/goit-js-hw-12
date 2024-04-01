export function getImage(query) {
  const BASE_URL = "https://pixabay.com/api/"
  const params = new URLSearchParams({
    key: "43019246-1b0e5a7f0beb7ca45884191ec",
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  })

  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
}
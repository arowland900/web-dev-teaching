console.log("Loaded");

function fetchImages(searchTerm) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=1LBCN9VTw0KhGyUQEBt0Vv05IrnHNsEp&limit=25`;

    axios.get(apiUrl)
    .then(res => {
        let imageEl = document.getElementById('images');
        res.data.data.forEach(i => {
            let image = document.createElement('img');
            image.src = i.images.original.url;            
            imageEl.appendChild(image);
        })
    });
};

function clearImages() {
    let imageEl = document.getElementById('images');
    imageEl.innerHTML = "";
};

document.querySelector('form').addEventListener('submit', e => {
    clearImages();
    e.preventDefault();
    let searchTerm = e.target[0].value;
    fetchImages(searchTerm);
});
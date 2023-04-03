const form = document.querySelector('form')
const list = document.getElementById('list');

function getMovies(searchText) {
    // first remove all the movies 
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    // adding new movies
    let url = `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=4b3xmppGfQKjkp_w06tRExP_wBvoJDmwJ7aqtpouZds`;
    axios.get(url)
        .then((resp) => {
            for (let item of resp.data.results) {
                let addImg = document.createElement('img');
                addImg.src = (item.links.download);
                addImg.style.margin = '10px'
                addImg.style.height = '25vw'
                list.append(addImg)
            }
        })
        .catch((err) => {
            // console.log(err)
            alert(err)
        })
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let searchText = form.elements[0].value;
    getMovies(searchText)
    form.elements[0].value = "";
});

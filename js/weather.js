console.log("connected")


let form = document.querySelector('form');
function callApi(cityname) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=dbc40f162ae11a7a2d7acb775294311d`;
    axios.get(apiURL)
        .then((e) => {
            const ad = document.getElementById('weather_info');
            while (ad.firstChild) {
                ad.removeChild(ad.firstChild);
            }
            console.dir(e.data)
            let name = (e.data.name)
            let temp = (e.data.main.temp);
            let pressure = (e.data.main.pressure);
            let temp_max = (e.data.main.temp_max);
            let temp_min = (e.data.main.temp_min);
            let speed = (e.data.wind.speed);
            let weather = (e.data.weather[0].main)
            let humidity = (e.data.main.humidity);


            const namee = document.createElement('p');
            namee.innerHTML = ("City : " + name);
            ad.append(namee);

            const tempe = document.createElement('p');
            tempe.innerHTML = "Temprature : " + temp;
            ad.append(tempe);

            const pressuree = document.createElement('p');
            pressuree.innerHTML = "Pressure : " + pressure;
            ad.append(pressuree);

            const temp_maxe = document.createElement('p');
            temp_maxe.innerHTML = "Maximum-temprature : " + temp_max;
            ad.append(temp_maxe);

            const temp_mine = document.createElement('p');
            temp_mine.innerHTML = "Minimum-temprature : " + temp_min;
            ad.append(temp_mine);

            const speede = document.createElement('p');
            speede.innerHTML = "Speed : " + speed;
            ad.append(speede);

            const weathere = document.createElement('p');
            weathere.innerHTML = "Weather : " + weather;
            ad.append(weathere);

            // weather += 

            let x = weather + ' Weather';
            console.log(x);





            let bi = `https://api.unsplash.com/search/photos?page=1&query=${x}&client_id=4b3xmppGfQKjkp_w06tRExP_wBvoJDmwJ7aqtpouZds&query=taxi&h=200&w=100`;
            axios.get(bi)
                .then((resp) => {
                    let x = Math.round(Math.random()*10);
                    console.log(x)
                    let item = resp.data.results[x].links.download;
                    console.log(item)
                    let link = item;
                    document.body.style.backgroundImage ="url(link)";

                    // document.body.style.backgroundImage =  "url('https://images.unsplash.com/photo-1490650404312-a2175773bbf5?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb')";
                    // console.log(document.body.style.backgroundImage)
                })
            const humiditye = document.createElement('p');
            humiditye.innerHTML = "Humidity : " + humidity;
            ad.append(humiditye);
        })
        .catch((e) => {
            alert('Enter the city correctly')
        })
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    callApi(form.elements[0].value)
    form.elements[0].value = "";
})






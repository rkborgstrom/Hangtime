(function () {

    let API_KEY = "48bec6862cf9f2f37892991bd1510a91";
    let searchButton = document.getElementById('searchButton');
    let search = document.getElementById('search');
    let humidity_widget = document.getElementById('humidity_widget');
    let pressure_widget = document.getElementById('pressure_widget');
    let temp_widget = document.getElementById('temp_widget');
    let tempMax_widget = document.getElementById('tempMax_widget');
    let tempMin_widget = document.getElementById('tempMin_widget');
    let weatherContainer = document.getElementById("weather-container");
    let description_widget = document.getElementById('description_widget');
    let icon_widget = document.getElementById('icon_widget');
    let main_widget = document.getElementById('main_widget');
    let name_widget = document.getElementById('name_widget');
    const weather = [];
    // let weatherWidget = document.getElementById('weather-widget')


// searchButton.addEventListener('keyup', function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {  //13 is the enter key
//         document.getElementById(searchButton).click();
//     }
// });


    searchButton.addEventListener('click', function (event) {
        if (search.value === "") {
            alert('Please enter city')
        } else {
            event.preventDefault();
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=imperial&APPID=48bec6862cf9f2f37892991bd1510a91`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);


                    let humidity = data.main.humidity;
                    let pressure = data.main.pressure;
                    let temp = data.main.temp;
                    let tempMax = data.main.temp_max;
                    let tempMin = data.main.temp_min;
                    let description = data.weather[0].description;
                    let icon = data.weather[0].icon;
                    let main = data.weather[0].main;
                    let name = data.name;



                    humidity_widget.setAttribute('value', humidity);
                    pressure_widget.setAttribute('value', pressure);
                    temp_widget.setAttribute('value', temp);
                    tempMax_widget.setAttribute('value', tempMax);
                    tempMin_widget.setAttribute('value', tempMin);
                    icon_widget.setAttribute('value', icon);
                    description_widget.setAttribute('value', description);
                    main_widget.setAttribute('value', main);
                    name_widget.setAttribute('value', name);
                    //getting current value of each attribute


                    name_widget.innerHTML = (`${name}`);
                    temp_widget.innerHTML = (` Current Temperature: ${temp}&#8457`);
                    tempMax_widget.innerHTML = (` Day High: ${tempMax}&#8457;`);  
                    tempMin_widget.innerHTML = (` Day Low: ${tempMin}&#8457;`);
                    humidity_widget.innerHTML = (` Humidity: ${humidity}&#37;`);
                    icon_widget.setAttribute('src', `/Images/${icon}.png`); 
                    description_widget.innerHTML = (`${description}`);
                    // main_widget.innerHTML = (`${main}`);


            

                })
                .catch(error => console.log(error));
        }
    });

})();

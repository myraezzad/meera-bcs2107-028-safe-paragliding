function buttonClicked(){

    var city = document.getElementById("city_input").value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {

        console.log(data); //output the API into console
        console.log(data.main.temp - 273.15)
        console.log(data.wind.gust)
        console.log(data.main.pressure)
        console.log(data.wind.speed)
        console.log(data.clouds.all)


        document.getElementById("demo").innerHTML=("Location: "+ data.name) + ("<br>Temperature: " 
        + (data.main.temp - 273.15)) + ("<br>Wind Gust: " + data.wind.gust) + ("<br>Air Pressure: " 
        + data.main.pressure) +  ("<br>Wind Speed: " + data.wind.speed) +  ("<br>Clouds: " + data.clouds.all);
        ;
    })
}
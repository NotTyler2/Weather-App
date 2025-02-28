const searchBox = document.querySelector("#searchInput")
const searchBtn = document.querySelector("#button")

async function getWeather(city) {
    try{const url = `https://api.openweathermap.org/data/2.5/weather?lat=26.1906&lon=-97.6961&appid=5b2e002d0c716b2d5fbb418f3eb7fc6f&units=imperial&q= `
   const api = await fetch(url + city)
   const data = await api.json();
    console.log(data)

    document.querySelector("#cityName").innerHTML = data.name;
    document.querySelector("#emoji").innerHTML = "Temperature: " + Math.round(data.main.temp) + " °F"
    document.querySelector("#realFeel").innerHTML = "Real Feel: " + Math.round(data.main.feels_like) + " °F"
    document.querySelector("#windSpeed").innerHTML = "Wind Speed: " + Math.round(data.wind.speed) + " MPH"
    //   #emoji and #cityTemp swapped to shuffle their positions on searching a location (#emoji = temp, #cityTemp = emoji)
   
    function getEmoji() {
        let emoji = document.querySelector("#cityTemp");
        let skies = data.weather[0].id;
        if(skies >= 200 && skies < 300) {
            emoji.innerHTML = "⛈️"
        }
        else if(skies >= 300 && skies < 600) {
            emoji.innerHTML = "🌧️"
        }
        else if(skies >= 600 && skies < 700) {
            emoji.innerHTML = "❄️"
        }
        else if(skies >= 700 && skies < 800) {
            emoji.innerHTML = "🌎"
        }
        else if(skies === 800){
            emoji.innerHTML = "☀️"
        }
        else if(skies >= 801 && skies < 900) {
            emoji.innerHTML = "☁️"
        }
    }
        getEmoji();
    }catch(error){
        document.querySelector("#cityName").innerHTML = "Enter a real city!!"
        document.querySelector("#cityTemp").innerHTML = "🔍";
        document.querySelector("#emoji").innerHTML = "";
        document.querySelector("#realFeel").innerHTML ="";
        document.querySelector("#windSpeed").innerHTML ="";
    }
}

    searchBtn.addEventListener("click", () =>{
        getWeather(searchBox.value)
        document.querySelector("#cityTemp").style.fontSize = "3rem"
        document.querySelector("#emoji").style.fontSize = "1.5rem"
        document.querySelector("#cityTemp").style.padding = "0"
        document.querySelector("#emoji").style.paddingTop = "25px"
        document.querySelector("#cityName").style.fontSize = "3rem"
    })
        
    searchBox.addEventListener("keyup", (event) => {
           if(event.key === 'Enter') {
               getWeather(searchBox.value)
                document.querySelector("#cityTemp").style.fontSize = "3rem"
                 document.querySelector("#emoji").style.fontSize = "1.5rem"
                 document.querySelector("#cityTemp").style.padding = "0"
                 document.querySelector("#emoji").style.paddingTop = "25px"
                 document.querySelector("#cityName").style.fontSize = "3rem"
            }
               })
    
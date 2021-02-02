const weatherapi={
key:"b3054ad09befe14ffb5c8190f4059de8",
url:"http://api.weatherstack.com/current?access_key=2ae8b2bbb6f4ba1d5499290d6bde8cd4&query="
}

const search=document.getElementById("searchbox");

search.addEventListener('keypress',(event)=>{
    
    if(event.keyCode==13){
        //console.log(search.value);
        getweather(search.value);
        document.querySelector('.display').style.display="block";
    }



});

function getweather(city){
    fetch(`${weatherapi.url}${city}`)
    .then(weather=>{
        return weather.json();
        
    }).then(show)
}


function show(weather){
    console.log(weather);
    
let c=document.getElementById('city');
c.innerText=`${weather.location.name} || ${weather.location.country} `;
let t=document.getElementById('temp');
t.innerHTML=`${weather.current.temperature}&deg;C`;
let ty=document.getElementById('type');
let obs=document.getElementById('obstime');
var today = new Date(); 
var week=["Monday","Tuesday",'Wednesday','Thursday','Friday','Saturday','Sunday']
var loct = today.getDay()
var date = today.getDate()+ '/' +(today.getMonth() + 1)+ '/' + today.getFullYear()   ;
let time=document.getElementById('time');
ty.innerText=`${weather.current.weather_descriptions}`;
time.innerText=`(${week[loct-1]}) ${date}`;
obs.innerText=`Observation time:${weather.current.observation_time}`;

changewall(weather.current.weather_descriptions);



}
function changewall(url){
    if(url=='Sunny')
    document.body.style.backgroundImage=`url( https://c.wallhere.com/photos/c0/b7/urban_architecture_architettura_buildings_building_museo_automobile_torino-758032.jpg!d
        )`;
    else if(url=='Haze')
    document.body.style.backgroundImage=`url( https://www.setaswall.com/wp-content/uploads/2017/06/Fog-Wallpapers-23-2560-x-1600-768x480.jpg )`;
   
    else if(url=='Mist')
    document.body.style.backgroundImage=`url( https://external-preview.redd.it/uXph-aQl65LEMx6tzW_11oo3sUkJ5keWzhNx6VKuO_s.jpg?auto=webp&s=af33259ad0da522f2165033965cfd4dc99da07c1 )`;
  
    else if(url=='Partly cloudy')
    document.body.style.backgroundImage=`url( https://cdn.hipwallpaper.com/i/92/95/MQYApb.jpg)`;
  




};
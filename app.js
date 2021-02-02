const express = require('express');
const app = express();
var request = require('request');
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs");
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
  res.render('index');
   
  });

  app.post('/weather',(req,res)=>{
    var city = req.body.searchbox;
    var url=`http://api.weatherstack.com/current?access_key=2ae8b2bbb6f4ba1d5499290d6bde8cd4&query=${city}`;
    request(url,(err,response,body)=>{
      weather=JSON.parse(body);
      if(weather.success==false){
        var w={
          city:`No data found!!`,
          temp:"",
          obstime:"",
          type:""
        };
        var data={w:w};
        res.render('index',data);
      }
      
      else{
    
    weather=JSON.parse(body);
    var w={
      city:`${weather.location.name} || ${weather.location.country} `,
      temp:`${weather.current.temperature}`,
      obstime:`Observation time:${weather.current.observation_time}`,
      type:`${weather.current.weather_descriptions}`
    };
    var data={w:w};
    res.render('index',data);

  }
    });
  
  });




app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
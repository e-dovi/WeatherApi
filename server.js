const http=require('http');
const ejs=require('ejs');
const express=require('express');
const path=require('path');

const app=express()
app.use(express.json());

app.set("views", path.join(__dirname, "/views"));
app.set('view engine', 'ejs');

app.get('/weather/:location', (requ, resp)=>{

//Uses weatherapi.com to get weather related info

const options = {
  hostname: 'api.weatherapi.com',
  port: 80,
  path: '/v1/current.json?key=/*API Key here*/&q='+ requ.params.location,
  method: 'GET'
}
; 
//verify that we have the correct path...  
console.log(options.path) 

const req =  http.request(options, (res) => {

     res.setEncoding('utf8');
     res.on('data', (chunk) => {
       let result = JSON.parse(chunk);
       console.log(result);
      let country=result.location.country;
      let tempF=result.current.temp_f;
      let tempC=result.current.temp_c;
      let condition=result.current.condition.text;
      //uses countryflagsapi.com to get the link to the flag of the country...
      const img='https://countryflagsapi.com/png/'+ country;

      resp.render('view', {'country':country,'tempF':tempF, 'img':img, 'tempC':tempC, 'condition':condition })
     });
    
     res.on('end', () => {
       console.log('No more data in response.');
     });
   });
    
   req.on('error', (e) => {
     console.error(`problem with request: ${e.message}`);
   });
   
   req.end();
})

const PORT=3000;

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}...`);
})

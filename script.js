let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click",()=>{
  let countryWeather = countryInp.value;
  let countryName =    countryInp.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${countryWeather}&appid=04310d6a93d415cd0cd5fc08040c7c74`
  let finalUrl=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`
 console.log(url)
  console.log(finalUrl);
  fetch(url)
.then((data1)=> data1.json())
.then((data2)=>{
console.log(data2["main"])
result1.innerHTML=`  
<h4><b><u>WEATHER REPORT</b></u></h4><br><br>
<div class="wrapper">
<div class="data-wrapper">
<h4>TEMPERATURE:<h4>
<span>${data2["main"].temp}<span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
<h4>FEELS_LIKE:<h4>
<span>${data2["main"].feels_like}<span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
<h4>MAXIMUM TEMPERATURE:<h4>
<span>${data2["main"].temp_max}<span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
<h4>MINIMUM TEMPERATURE:<h4>
<span>${data2["main"].temp_min}<span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
<h4>PRESSURE:<h4>
<span>${data2["main"].pressure}<span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
<h4>HUMIDITY:<h4>
<span>${data2["main"].humidity}<span>
</div>
</div>`

})


 
fetch(finalUrl)
.then((Response)=> Response.json())
.then((data)=>{
  console.log(data[0]);
  console.log(data[0].name.common);
  console.log(data[0].flags.svg);
  console.log(data[0].capital[0]);
  console.log(data[0].region[0])
  console.log(data[0].postalCode.format)
  console.log(data[0].latlng);
  
  
    
 
    result.innerHTML=`
    <img src="${data[0].flags.svg}"
    class="flag-img">
    <h2>${data[0].name.common}<h2>
    <div class="wrapper">
    <div class="data-wrapper">
    <h4>capital:<h4>
    <span>${data[0].capital[0]}<span>
    </div>
    </div>
    <div class="wrapper">
    <div class="data-wrapper">
    <h4>region:<h4>
    <span>${data[0].region[0]}<span>
    </div>
    </div>
    <div class="wrapper">
    <div class="data-wrapper">
    <h4>postalcode:<h4>
    <span>${data[0].postalCode.format}<span>
    </div>
    </div>
    <div class="wrapper">
    <div class="data-wrapper">
    
    <h4>latlng:<h4>
    <span>${data[0].latlng}<span>
    </div>
    </div>`
 

    
    
 
}).catch(()=>{
  if(countryName.length ==0){
    result.innerHTML=`<h3>The input field cannot be empty</h3>`
  }
  else{
    result.innerHTML=`<h3>please enter a valid country</h3>`;
  }
})
 });
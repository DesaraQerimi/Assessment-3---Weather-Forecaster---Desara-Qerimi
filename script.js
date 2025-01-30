
//fetching data

const weatherData = function(){
return fetch('data.json').then(response => {
if(!response) throw new Error(err) (`${err.msg}`)
return response.json()});
}

//display city and country
console.log("---City and country---");

weatherData().then(data => console.log(data.city, data.country));

//everyday forecast
weatherData().then(data => data.forecast.map(day =>`On ${day.day} it will be ${day.temperature}C with ${day.conditions}`))
.then(data => {
    console.log("---Weather forcast(map)---")
    console.log(data)});


//Sunny days
weatherData().then(data => data.forecast.filter(day => day.conditions==="Sunny")).then(data => {
    console.log("---Sunny days---")
    console.log(...data)});

//Average temp
weatherData()
.then(data => data.forecast.reduce(((sum,day, i, arr) => sum += day.temperature /arr.length), 0))
.then(data => console.log(`Average temerature of the week is ${data}`));

//Highest temp day 
weatherData().then(data => {let temp = data.forecast.map(day => day.temperature);
    const highestTemp = temp.reduce((max, day) => max>day ? max : day, temp[0])
    const highestTempDay = data.forecast.find(day => day.temperature === highestTemp)
    console.log(`The warmest day is ${highestTempDay.day} with a temperature of ${highestTempDay.temperature}C`);
})


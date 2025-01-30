# Assessment 3 - Weather Forecaster - Desara Qerimi
 
General Setup for Each Assessment:
Create an index.html in a local folder.
In the same folder, create a data.json file (for each assignment, name it differently or replace the contents with the JSON provided).
Open index.html in your browser.
Open the browser console (e.g., Chrome DevTools).
Use fetch('./data.json') or fetch('data.json') to retrieve and process the JSON data in the console.
Use pure JavaScript (no frameworks) for all logic.
If you want a quick styling framework (optional), you can include it in index.html —but the logic remains in the console.
Deliver your final code and console logs as the solution.
Assessment #3: Weather Forecaster
Goal Simulate retrieving weather data and analyzing it with JavaScript methods.
JSON Data (save as data.json )
{ "city": "Metropolis", "country": "Fictionland", "forecast": [ { "day": "Monday", "temperature": 24, "conditions": "Sunny" }, { "day": "Tuesday", "temperature": 19, "conditions": "Cloudy" }, { "day": "Wednesday", "temperature": 22, "conditions": "Rainy" }, { "day": "Thursday", "temperature": 18, "conditions": "Stormy" }, { "day": "Friday", "temperature": 26, "conditions": "Sunny" } ] }
Instructions
Fetch the data into a variable, say weatherData .
Log the city and country name in the console.
From the forecast array:
Map over each entry to create an array of formatted strings:
"On , it will be °C with ."
Find the warmest day (highest temperature ) and log its day and temperature.
Filter for days where conditions is "Sunny" . Log these days.
Use an average function ( reduce or otherwise) to compute the average temperature of the week.
Log all results in an easy-to-read format.
# weather

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## EXAMPLE RESULTS FROM OPENWEATHER API

# MY NOTES

```
1.npm install -g @vue/cli
2.vue create my_weather
3.https://openweathermap.org/api?msclkid=5ecf04c5c08c11ec965f1b6d81c40e47
4.Example on how to make an API call using your API key
API call

http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

5.results from API

{coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 10000, …}
base: "stations"
clouds: {all: 99}
cod: 200
coord: {lon: -0.1257, lat: 51.5085}
dt: 1650451394
id: 2643743
main: {temp: 16.75, feels_like: 15.73, temp_min: 14.3, temp_max: 17.93, pressure: 1016, …}
name: "London"
sys: {type: 2, id: 268730, country: 'GB', sunrise: 1650430457, sunset: 1650481452}
timezone: 3600
visibility: 10000
weather: Array(1)
0: {id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d'}
length: 1
[[Prototype]]: Array(0)
wind: {speed: 6.17, deg: 80}
[[Prototype]]: Object

6. To fetch data from fictional db.json file
  -  npm i json-server
  - npx json-server --watch data/db.json or json-server --watch data/db.json


```

# terminal-weather-app

This project is a basic terminal application built with Node.js that connects to Mapbox API to get lat and long of users address provided by the user via cli arguments and connects to Weather Stack API to get the weather for those coords.

## Run Locally

Fork the project

Clone the project

confirm that node.js is on your machine

```bash
  node --version
```

if no output appears then install node.js

Go to the project directory

```bash
  cd terminal-weather-app
```

Install dependencies

```bash
  npm install
```

create .env file

```bash
  touch .env
```

change .env file to your API keys for Weather Stack and Mapbox

```.env
#.env file
API_KEY='your api key'
MAPBOX_TOKEN='your api key'
```

run application in your terminal

```bash
  node app.js 'YOUR ADDRESS'
```

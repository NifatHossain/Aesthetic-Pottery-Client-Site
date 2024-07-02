# Aesthetic Pottery

A website for unique and traditional pottery items

## Live Link
https://aesthetic-pottery-client.web.app/



## Features

1. There are login and registration process for users 

2. Registered users can add new products and modify his added products details and can delete it.

3. users can order pottery items

4. website responsible for all devices

## Technologies

React, MongoDB, Node js, Express, Firebase,vercel

## How to run Locally

-> clone Aesthetic-Pottery-Client-Site and Aesthetic-Pottery-Server in you PC

-> Install node, nodemon in you PC

-> open command prompt in these two folders and run (npm i) to install the dependencies

-> create a .env.local file in root folder of client site code and setup your fireBase credentials

example:
VITE_apiKey=***

VITE_authDomain=***

VITE_projectId=***

VITE_storageBucket=***

VITE_messagingSenderId=***

VITE_appId=***

-> create a .env file in server site and setup mongodb credentials

example:
DB_USER=***

DB_PASS=***

->change server url from all the files(where used) of clients sites from https://aesthetic-pottery-server.vercel.app to http://localhost:5000

-> run (nodemon index.js) in server site command prompt

-> run (npm run dev) in the client site command prompt and open the link that you will get after running this command
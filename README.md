# Simple Mobile Application NOTES APP With React Native
Notes App Application.

## How to use this program ?

1. You must clone this repository and [REST API Notes App](https://github.com/maslow123/restful-notes-app), and don't forget to follow the guide on how to install the backend

2. If you done to clone this repo, next steps is install node module in according with the json package, enter the command as below
```
npm install
```

3. If npm install is all successfully, the next step is runnning this program on your device, the way is.. first change the IP address on the file ```app/Publics/Redux/Actions/categories.js``` and ```app/Publics/Redux/Actions/notes.js``` according to your ip address.

```
const url = "http://192.168.100.21:3000/notes";
const urlCategories = "http://192.168.100.21:3000/categories";
```
4. If you done to change the IP Address, the next steps is activate the server in a way, open your terminal/CMD and enter the command as below

```
nodemon index.js // for activate the server
```
5. If you done do it, running the program by entering the command below
```
react-native run-android
```

6. And finally, if it's like the picture below, the application was successfully executed!





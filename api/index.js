
var firebase = require("firebase");

const config = {
    apiKey: "AIzaSyBX-RXG6Ixeem9Cpw3KRLiFdXguHf1dMmA",
    authDomain: "web-news-9d7cb.firebaseapp.com",
    databaseURL: "https://web-news-9d7cb-default-rtdb.firebaseio.com",
    projectId: "web-news-9d7cb",
    storageBucket: "web-news-9d7cb.appspot.com",
    messagingSenderId: "450915590831",
    appId: "1:450915590831:web:ae7b129d8956c2bdd26a5a",
    measurementId: "G-L27X1VM3LR"
};

firebase.initializeApp(config);


var loadNews = (id) => {
    let url = '/news/';
    url += (id != undefined) ? id : '';  
    return firebase.database().ref(url).once('value').then(function(snapshot) {
    return snapshot.val();
    });
};

var loadCategories = (id) => {
    let url = '/categories/'; 
    url += (id != undefined) ? id : '';  
    return firebase.database().ref(url).once('value').then(function(snapshot) {
        return snapshot.val();
    });
};

module.exports = {
    news : loadNews,
    categories : loadCategories
};

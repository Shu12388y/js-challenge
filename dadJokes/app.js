
// let giveMeAJoke = require('give-me-a-joke');
// // To get a random dad joke
// // const button=document.getElementById('button')

// // button.addEventListener('click',()=>{
//     giveMeAJoke.getRandomDadJoke ((jokes)=>{
//         console.log(jokes);
//     })

const axios = require('axios');
var request = require('request');

exports.getRandomCNJoke = (joke) => {
  axios
    .get('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
    .then((response) => {
      joke(response.data.value.joke);
    })
    .catch((err) => {
      console.log(err);
    });
};
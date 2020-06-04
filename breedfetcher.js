const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      let bodyObj = JSON.parse(body)[0];
      let response = bodyObj ? bodyObj.description.trim() : 'Sorry, there is no information for that breed.';
      callback(null, response);
    }
  });
};

module.exports = { fetchBreedDescription };
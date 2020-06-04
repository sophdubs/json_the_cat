const request = require('request');

const breed = process.argv.slice(2)[0];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log(`Error: Could not find ${error.hostname}.`); // Print the error if one occurred
  } else {
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.

    let bodyObj = JSON.parse(body)[0];
    console.log(bodyObj ? bodyObj.description : 'Sorry, there is no information for that breed.');
  }
});
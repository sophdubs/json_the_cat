const { fetchBreedDescription } = require('./breedfetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (err, desc) => {
  if (err) {
    console.log('Error fetch details:', err);
  } else {
    console.log(desc);
  }
});


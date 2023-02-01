const request = require('request');
const fs = require('fs');
const arr = process.argv;
request( arr[2], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(arr[3], body, err => {
    if (err) {
      console.error(err);
    }
    console.log('file written succesfully');
    fs.stat(arr[3], (err, stats) => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${stats.size} bytes to ${arr[3]}`);
    // we have access to the file stats in `stats`
  });
  });



});


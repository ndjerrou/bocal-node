const fs = require('fs');

const log = (message) => {
  fs.appendFile(
    `${__dirname}/logs.txt`,
    `${new Date()} : ${message} \n`,
    (err) => {
      if (err) console.log(err);
    }
  );
};

module.exports = log; // make visible to others the log function

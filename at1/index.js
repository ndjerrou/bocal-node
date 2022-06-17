const fs = require('fs');
const os = require('os');
// 1ère partie

// x inputs, 1 output (somme)

function sum(...args) {
  // rest operator

  console.log(args);
  const counter = args.reduce((prev, curr) => {
    return +prev + +curr;
  }, 0);

  return counter;
}
const args = process.argv.slice(2); // output : an array

const res = sum(...args); // ... ==>spread operator
console.log(res);

// 2e partie

const filePath = `${__dirname}/file2.txt`;

// fs.writeFile(filePath, 'je', function (err, data) {
//   if (err) {
//     console.log(err.message);
//   }
// });

fs.appendFile(filePath, " m'appelle Nissim", function (err, data) {
  if (err) {
    console.log(err.message);
  }
});

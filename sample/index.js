function sum(a, b) {
  return a + b;
}

const res = sum(2, 3);

console.log('2 + 3 = ', res);

// arrow function

const sumAR = (a, b) => {
  return a + b;
};

// when the AR function returns directly, we can ommit the {}

const sumAR2 = (a, b) => a + b; // return is implicit here

console.log(sumAR2(2, 4));

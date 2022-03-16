
const [nodePath, filePath, firstNumberString, secondNumberString] = process.argv;


console.log('ENV var TEST', process.env.TEST)


const firstNumber = Number(firstNumberString);
const secondNumber = Number(secondNumberString);

const result = add(firstNumber, secondNumber);
console.log(result);

function add (a, b) {
  return a + b;
}

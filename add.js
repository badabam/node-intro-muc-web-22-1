
const [nodePath, filePath, firstNumberString, secondNumberString] = process.argv;

const firstNumber = Number(firstNumberString);
const secondNumber = Number(secondNumberString);

const result = add(firstNumber, secondNumber);
console.log(result);

function add (a, b) {
  return a + b;
}

import { inputDataPart1 } from "./data-part-1.js";

// Advent of code from adventofcode.com
//Part 1

let solutionNumber = 0;

function addFirstLastDigits(word) {
    let firstDigit = null;
    let lastDigit = null;

    for (let i = 0; i < word.length; i++) {
        const digit = parseInt(word[i], 10);
        if (!isNaN(digit)) {
            if (firstDigit === null) firstDigit = digit;
            lastDigit = digit;
        }
    }

    solutionNumber += parseInt(`${firstDigit}${lastDigit}`);
}

for (const word of inputDataPart1) {
    addFirstLastDigits(word);
}

console.log(solutionNumber);

// Part 2

const digits = {
    one: 'o1e',
    two: 't2o',
    three: 't3e',
    four: '4',
    five: '5e',
    six: '6',
    seven: '7n',
    eight: 'e8',
    nine: '9',
}

let solArray = [];
let solutionNumberPart2 = 0;

function extractDigits(line) {
    for (let word in digits) {
        line = line.replaceAll(word, digits[word]);
    }

    const chars = line.split("");
    const firstDigit = chars.find(char => !isNaN(char));
    const lastDigit = chars.reverse().find(char => !isNaN(char));
    return firstDigit + lastDigit;
}

function sumAndReturnSolution(lines){
    lines.forEach(line => {
        solArray.push(extractDigits(line));
    });
    console.log(solArray)
    solutionNumberPart2 = solArray.reduce((prev, current) => parseInt(current) + parseInt(prev),)
}

sumAndReturnSolution(inputDataPart1);

console.log(solutionNumberPart2);

// Advent of Code adventjs.dev

const giftIds = [2, 1, 3, 5, 3, 2]
const giftIds2 = [1, 2, 3, 4]
const giftIds3 = [5, 1, 5, 1]

function findFirstRepeated(gifts) {
    let giftSet = new Set();
    for(const id of gifts){
      if(giftSet.has(id)){
        return id;
      }
      giftSet.add(id);
    }
    return -1
}

console.log(findFirstRepeated(giftIds3))

import { inputDataPart2 } from "./data-part-2.js"

// Part 1

const gamesData = [
  "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
  "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
  "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
  "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
  "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
];

const redCubes = 12;
const greenCubes = 13;
const blueCubes = 14;
let possibleGames = []

function parseGameData(gameData){
  const parts = gameData.split(": ");
  const gameID = parseInt(parts[0].split(" ")[1]);
  const subsets = parts[1].split("; ");

  return { gameID, subsets };
}

function isGamePossible(subsets){
  for(const subset of subsets){
    const colors = subset.split(", ")
    for(const countColor of colors){
      const balls = countColor.split(" ");
      if(balls[1] == "blue"){
        if(balls[0] > blueCubes){
          return false
        }
      }
      else if(balls[1] == "red"){
        if(balls[0] > redCubes){
          return false
        }
      }
      else if(balls[1] == "green"){
        if(balls[0] > greenCubes){
          return false
        }
      }
    }
  }
  return true;
}

for (let game of inputDataPart2) {
  const { gameID, subsets } = parseGameData(game);
  if (isGamePossible(subsets)) {
    possibleGames.push(gameID);
  }
}

const sumAllGameIDs = possibleGames.reduce((prev, current) => prev + current)
console.log(sumAllGameIDs)

// Part 2



// Advent of Code adventjs.dev

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

function manufacture(gifts, materials) {
    let solutionArray = []
    for(const gift of gifts){
      let flag = gift.split('').every(char => materials.includes(char))
      if(flag){
        solutionArray.push(gift);
      }
    }
    return solutionArray;
}

console.log(manufacture(gifts, materials))

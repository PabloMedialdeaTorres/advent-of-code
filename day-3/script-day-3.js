// Advent of Code adventjs.dev

const original = 'abscd'
const modified = 'abcde'

function findNaughtyStep(original, modified) {
  if(original === modified){
    return ''
  }

  let maxLength = Math.max(original.length, modified.length);
  for (let i = 0; i < maxLength; i++) {
    if (original[i] !== modified[i]) {
      if (modified.length > original.length) {
        return modified[i];
      }
      else {
        return original[i];
      }
    }
  }
  return '';
}

console.log(findNaughtyStep(original, modified));
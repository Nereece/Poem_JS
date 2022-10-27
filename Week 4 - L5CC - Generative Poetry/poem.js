// this is a function to return a random element from an array
function randomElementFromArray(inputArray){
    let randomIndex = Math.floor(Math.random() * inputArray.length)
    return inputArray[randomIndex]
}


let openingLines = ["In a mysterious far away land,", "In the forest on a story night,", "On a dark cliff,", "In a desolate castle,", "On a starry night at sea,"];
let pronouns = ["he", "she", "we", "they", "I"];
let verbs = ["sang", "danced", "ran", "whispered", "skipped", "conjured", "summoned a spirit"];
let adverbs = ["conciously", "patiently", "tiredly", "calmly", "suspiciously", "quietly"];


let titles = ["At the seaside", "broken down and tired", "Another love", "Blank Space", "Midnight Rain", "lavender Fields"];
let title = randomElementFromArray(titles);

document.getElementById("heading").innerHTML = title


let longPoem = ""

for(let i = 0; i < 10; i++){
    let openingLine = randomElementFromArray(openingLines);
    let pronoun = randomElementFromArray(pronouns);
    let verb = randomElementFromArray(verbs);
    let adverb = randomElementFromArray(adverbs);
    let poem = openingLine + " " + pronoun + " " + verb + " " + adverb + "<br>"
    longPoem += poem 
}
console.log(longPoem)

document.getElementById("para").innerHTML = longPoem
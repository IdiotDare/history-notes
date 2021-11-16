
var testText = 'testing';
document.getElementById('han-text').innerHtml = testText;

var infoObj = {
  shang: ["They extended the kingdom to the Xia Kingdom in the north, and south of the Yellow river.",
          "They created:The Chinese writing system -over 10,000 characters -7 main dialect groups, but hundreds of sub-dialects(because of all the ethnic groups); a common writing system was necessary for unity",
          "They created: The notion of filial piety -respected for parents and the ancestors of the father -generations lived together, the eldest male controlled everything(money,important decisions)",
          "Girls/women were treated as inferior, raised to obey the males in the family. They were married off between the ages of 13-16, becoming part of their husbands' families.",
          "The Shang dynasty was polytheistic with a supreme God, and many less Gods."],
  zhou: ["The Dynastic Cycle, can be considered the life cycle of a dynasty: 1. Strong dynasty establishes peace and prosperity; considered to have Mandate of Heaven.",
         "The Dynastic Cycle, can be considered the life cycle of a dynasty.:



}


var wLines = [
    "I know right?",
    "Confusing, huh?",
    "I don't know what you want.",
    "I'm not sure why you're asking me.",
    "I don't think you should ask me.",
    "I...",
    "I...am not exactly sure.",
    "I don't get it...",
    "Sorry. I don't understand.",
    "I don't know. Do I look like I even care? ...Sorry.",
    "I don't know what you want.",
    "I'm going to f*cking slap you.",
    "...?",
    "I am not...",
    "*Local ??? is confused!*",
    "no idea dude I’m lost",
    "Not sure bro I’m unsure",
    "I...forget how to think. Later?",
    "Umm..."
] //an array of possible options which can be picked out later with smth ike wLines[num] 

function change_text(){
    var num = Math.floor(Math.random() * (17-1)) //chooses a random number between 0 and the number of text options, which will then be used to index blah blah the array.
    if(wLines[num] != document.getElementById("text").textContent) {
        document.getElementById("text").innerHTML = wLines[num];
    } else if(wLines[num] == document.getElementById("text").textContent) {
        rantext()
    } else {
        document.getElementById("text").innerHTML = "IdiotDare is an idiot and needs to fix their code.";
    }
}




//button functions
function shangChange(){

document.getElementById('han-text').innerHtml = testText;

}

function zhouChange(){
  
}

function hanChange(){
  
}

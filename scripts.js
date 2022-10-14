document.addEventListener("click", newMessage)

let affirmations = ["I am strong",
"I am beautiful",
"I am perfect",
"I am free",
"I am absolutely amazing",
"I am great just the way I am",
"I am full of energy",
"I am worth investing in",

"I am physically strong",
"I am capable of anything",
"I'm brave, I'm great",
"I can overcome anything",

"I am gorgeous just the way I am",
"I love what I see in the mirror",
"I love myself",
"I feel confident in myself",
"I believe in myself",
"I trust myself",

"I prioritize my physical health",
"I prioritize my mental health",
"I take care of myself",

"I radiate kindness",
"I express my gratitude freely",

"I am surrounded by love",
"I give and receive love",
"I both give and expect respect",
"I am friendly to everyone",
"I get along well with others",
"I have healthy relationships with people",

"I have many talents",
"I have everything I need",
"I can do anything I set my mind to",
"my life is precious and beautiful"
]

function newMessage() {
    let randomIndex = Math.floor(Math.random() * affirmations.length)
    let affirmation = affirmations[randomIndex]
    document.getElementById("current-affirmation").innerHTML = affirmation;
    document.body.style.backgroundColor = "hsl(" + Math.floor(Math.random() * 360) + ", 75%, 70%)"
    document.getElementById("current-affirmation").style.color = "white"
}
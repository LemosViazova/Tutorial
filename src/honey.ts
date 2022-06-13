


const say = (name: string,whatToSay:string): String =>
name + "," + whatToSay
console.log (
    say("Bear","do you like honey?")
)



const animals = [
    "elephant",
    "fox",
    "wolf",
    "rabbit",
    "bear",
]

const animalsWhoLikeHoney = [
    "bear",
    "fox",
]
animals.filter (
    animal=> animalsWhoLikeHoney.includes(animal)
)
.forEach(
    animal => console.log(animal)
)

const likesHoney = (animal: string): Boolean =>
    animalsWhoLikeHoney.includes(animal)

console.log("Bear likes honey?")
console.log(likesHoney("bear"))

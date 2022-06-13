console.log("Hello World!")







const sayHello = (name: String): String => 
    "Hello, " + name

console.log(
    sayHello("Zara")
)

const family = [
    "Miguelino",
    "Scooby-Doo",
       
 "Nastya",
 "Zara",
 "Leonid",
 "Enafa",
 "Artem",
 "Viktor",
]

family
  .filter( // we filter only the familyMember that are NOT Miguelino
      familyMember => familyMember != "Miguelino"
  )
  .map( // it takes every family person and says hello
      familyMember => sayHello(familyMember)
  )
  .forEach( // it takes every hello and prints to console
      name => console.log(name)
)





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

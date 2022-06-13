
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
  .map( // it takes every family person and says hello
      familyMember => sayHello(familyMember)
  )
  .forEach( // it takes every hello and prints to console
      name => console.log(name)
)



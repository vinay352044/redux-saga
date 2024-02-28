function* simpleGenerator(){
    yield 1
    yield 2
    yield 3
}
const generatorObj = simpleGenerator()
console.log(generatorObj.next())
console.log(generatorObj.next())
console.log(generatorObj.next())
console.log(generatorObj.next())  // no more code to run
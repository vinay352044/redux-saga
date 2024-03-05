function* simpleGenerator(){
    yield 1
    yield 2
    yield 3
}
const generatorObj = simpleGenerator()
console.log(generatorObj.next())    

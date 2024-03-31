// configurable which if true, the property can be deleted and these attributes can be modified.
// configurable is false, then we can't we can't modify or delete that specific property.

// Enumerable means that if we loop through the object with like a for in, then that that property is not going to show.

// writable  if'true',  the value of the property can be changed, otherwise it cannot.

//value the value of the Property

// Math.PI = 4 // made no change on the value
// console.log(Math.PI)
// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor)


const rectObj ={
    name: 'Rectangle 1',
    width:10,
    height: 10
}
const descriptorRectObj = Object.getOwnPropertyDescriptor(rectObj, 'name')
console.log(descriptorRectObj)


Object.defineProperty(rectObj, 'name',{
    writable: false,
    configurable: false,
    enumerable: false
})
const descriptorRectObj1 = Object.getOwnPropertyDescriptor(rectObj, 'name')
console.log(descriptorRectObj1)

rectObj.name = "New name"// made no change on the value
console.log(rectObj.name)

for (let [key, value] of Object.entries(rectObj)){
    console.log(`${key}: ${value}`)
}

console.log(Object.getOwnPropertyDescriptors(rectObj))
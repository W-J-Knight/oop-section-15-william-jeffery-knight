class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }



  get firstName (){
    return this.capitalizeFirst(this._firstName)
  }

  set firstName(value){
    this._firstName = this.capitalizeFirst(value)
  }

  get lastName (){
    return this.capitalizeFirst(this._lastName)
  }

  set lastName(value){
    this._lastName = this.capitalizeFirst(value)
  }

  get fullName(){
    return `${this.firstName} ${this._lastName}`
  }

  capitalizeFirst(value){
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}

const person1 = new Person('john', 'doe')
// get firstName is call to to access _firstName value
console.log(person1.firstName)
// console.log(person1.lastName)

// set firstName is call to reset the _firstName value
person1.firstName = 'joe'
person1.lastName = "smith"
console.log(person1)

console.log(person1.fullName)
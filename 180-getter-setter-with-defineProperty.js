// construction function
function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  Object.defineProperty(this, "firstName", {
    get: function () {
      return this.capitalizeFirst(this._firstName);
    },

    set: function (value) {
      this._firstName = this.capitalizeFirst(value);
    },
  });
  Object.defineProperty(this, "lastName", {
    get: function () {
      return this.capitalizeFirst(this._lastName);
    },

    set: function (value) {
      this._lastName = this.capitalizeFirst(value);
    },
  });
}

Person.prototype.capitalizeFirst = function (value){
    return value.charAt(0).toUpperCase() + value.slice(1)
  }

const person1 = new Person("john", "doe");
person1.firstName = "larry"

console.log(person1.firstName);


// Object Literal

const PersonObj = {
    _firstName: 'jane',
    _lastName: "doe",

    get firstName (){
        return this.capitalizeFirst(this._firstName)
      },
    
      set firstName(value){
        this._firstName = this.capitalizeFirst(value)
      },
    
      get lastName (){
        return this.capitalizeFirst(this._lastName)
      },
    
      set lastName(value){
        this._lastName = this.capitalizeFirst(value)
      },
    
      get fullName(){
        return `${this.firstName} ${this.lastName}`
      },
     
      capitalizeFirst(value){
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
}

// PersonObj.prototype.capitalizeFirst = function (value){
//     return value.charAt(0).toUpperCase() + value.slice(1)
//   }


const person2 = Object.create(PersonObj)
// get firstName is call to to access _firstName value
console.log(person2.firstName)
// console.log(person1.lastName)
console.log(person2.fullName)
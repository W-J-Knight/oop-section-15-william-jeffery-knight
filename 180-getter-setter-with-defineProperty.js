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

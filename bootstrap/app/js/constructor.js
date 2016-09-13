console.log("hello");

var Person , person, anotherPerson;

Person = function(name,age){
    this.name = name;
    this.age = age;
};

Person.prototype.toString = function(){
  return this.name;  
};

person = new Person("Oleh",22);



console.log(person.toString());

console.log({}.toString());
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(/\w/));
var str = Object.prototype.toString.call(function(){});
console.log("{hello world}".slice(-6,-1));
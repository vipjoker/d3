var objectProto =  {
    constructor: function(name,age){
        this.name = name;
        this.age = age;
        return this;
    },
    name: "NO_DATA",
    printme: function(){
        console.log(this.name + " "  + this.age);
    }
    
}


var o1 = Object.create(objectProto).constructor("Oleh",32);
o1.printme();

var o2 = Object.create(objectProto).constructor("Ivan",45);
o2.printme();

var o3 = {};
console.log(objectProto.isPrototypeOf(o3));

var child = Object.create(objectProto);
child.constructor = function(name,age,skills){
    objectProto.constructor.apply(this,arguments);
    this.skills = skills || [];
    return this;
}

child.develop = function(){
  console.log("Creating website");  
};


var stepan = Object.create(child).constructor("Stepan" , 22,["Java","Android"]);


console.log(stepan.skills);
stepan.develop();
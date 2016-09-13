var string , newString;

string = "Sometimes the same is diffreent";

newString = string
    .replace("is", "is not")
    .concat(" actually")
    .toUpperCase()
    .replace(/ /g, "%")
    .slice(10);

console.log(newString);

var Vec2 = function(x,y){
    this.x = x;
    this.y = y;
};

Vec2.prototype.add = function(vec){
    this.x += vec.x;
    this.y += vec.y;
    return this;
};

Vec2.prototype.multScalar = function(scalar){
    this.x += scalar;
    this.y += scalar;
    return this;
}


var world = {
    gravity:new Vec2(0,1)
};


var object = {
    position : new Vec2(10,20),
    speed : new Vec2(1,3),
    update:function(){
        
    }
};

console.log(object);
object.position.add(world.gravity);
console.log(object);


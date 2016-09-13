var array = ["January", "February","March","April", "May"];
array.forEach(function(element,index,array){
    
    
              
    //array[index] = element.toUpperCase();
});


var newArray= array.map(function(e){return e.toUpperCase()});

console.log(newArray);

console.log(array.every(function(e){return e.indexOf('a') !== -1;}));
console.log(array.some(function(e){return e.indexOf('a') !== -1;}));

var numbers = [1,2,3,4,5,6];


var reduced = numbers.reduce(function(a,b){
    return a + b;
});

console.log(reduced);

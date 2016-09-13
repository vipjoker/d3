
var array = [2,2,1];

console.log(array);

var months = ["january", "february", "march"];

months[months.length] = "April";
months[20] = "August";

months.length = 4;
console.log(months);

console.log(typeof months);
var arrayAsString = months.join("|");
console.log(arrayAsString);
console.log(months.reverse());
console.log(months.sort());

console.log(months.slice(2, -1));
console.log(months.concat(["Hello"]));

console.log(months.splice(1,3,"newelemnt" ,"newElement2"));//return deleted elements

months.push('last element');
months.unshift('first element');
console.log(months);


months.pop();//removes last element
months.shift(); //removes first element;

console.log(months);









var pattern =  /\w+/g;

var string ="How we survive is what;     makes;us,who we are";

console.log(string.match(pattern));

var pattern2 =  /\w+/;

console.log(string.match(pattern2));

console.log(string.search(pattern));

console.log(string.split(/[\s,]+/));


console.log(pattern.global);
console.log(pattern.ignoreCase);
console.log(pattern.multiline);



var emailPattern = /\w+@\w+\.\w+/;

var simpleText = "Hello world this is simple tajcig@ya.ru text for regexp tutorial";
var simpleText2 = "Hello world this is simple text for regexp tutorial";

console.log(emailPattern.test(simpleText));
console.log(emailPattern.test(simpleText2));




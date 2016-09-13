
var json = {
  name: "Oleh",
    age :33,
    toJSON:function(){
        return {
            name:this.name
        }
    }
};
var str = JSON.stringify(json)
console.log(str);
console.log(JSON.parse(str));
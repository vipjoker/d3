require([
    "libs/live",
    "libs/d3",
    "histogram"],function(live, d3,histogram){
     
        console.log(live);
        console.log(d3);
        console.log(histogram);

        
        function getRandomData(){
            var array  = [];
            var date = new Date().getTime();
            var value = 1000;
         
            for(var i = 0 ; i < 500; i++){

                
                var point = {
                    value : value + Math.random() * 500,
                    date  : date -=  4*60*60 * 1000
                };
                array.push(point);
            }

            return array;
        }

        console.log(JSON.stringify(getRandomData()));

        histogram.load(getRandomData());

});
define(['histogram'], function() {
    
    var canvas;
    var x, y, axisX, axisY, line, path;
    
    
    function mouserOverTransition() {

        console.log(this);
        d3.select(this).transition()
        .duration(400)
        .ease(d3.ease('cubic-in-out'))
        .attr('r', 8)
        .attr('fill', 'red')
        .select('.label').transition()
        .style('display','block');
    }
    
    
    function mouseOutTransition() {
        d3.select(this)
        .transition()
        .delay(300)
        .duration(400)
        .ease(d3.ease('cubic-in-out'))
        .attr('r', 6)
        .attr('fill', 'black')
        .select('.label')
        .style('display','none');
    }
    
    
    function putDrag() {
        
        return d3.behavior
        .drag()
        .on('drag', function() {
            d3.select(this).attr('cx', d3.event.x);
            d3.select(this).attr('cy', d3.event.y);
        });
    }
    
    var h = {
        
        load: function(data) {
            
            requirejs(["libs/d3"], function() {
                h.init(data);
            });
        },
        
        init: function(data) {
            
            h.initCanvas();
            h.initScales(data);
            h.initAxes();
            h.drawChart(data);
            h.initLine();
            h.setListeners();
        },
        
        initCanvas: function() {
            canvas = d3
            .select('.container')
            .append('svg')
            .attr('id', 'svgContainer')
            .append('g')
            .attr('class', 'main');
            
            
           // d3.select('#svgContainer')
           // .on('click', function() {
                
            //    console.log(d3.event.target.tagName);
              //  console.log(d3.event);
            //    if (d3.event.target.tagName !== 'circle') {
             //       var point = {
             //           x: x.invert(d3.event.x).toFixed(0),
             //           y: y.invert(d3.event.y).toFixed(0)
              //      };
              //      data.push(point);
              //      console.log(JSON.stringify(data));
              //      h.drawChart();
              //      h.drawLine();
               // }
            
           // });
        },
        
        
        
        initScales: function(data) {
            
            x = d3.scale.linear()
            .range([0,500])
            .domain(d3.extent(data,function(d){return d.date}));
            
            y = d3.scale.linear()
            .range([0, 250])
            .domain(d3.extent(data,function(d){return d.value;}));
        },
        
        initAxes: function() {
            
            axisX = d3.svg.axis()
            .scale(y)
            .ticks(5)
            .tickFormat(function(d) {
                return d + " EUR"
            })
            .orient('right');
            
            axisY = d3
            .svg
            .axis()
            .tickPadding(10)
            .scale(x);
            
            canvas.append('g')
            .attr('transform', 'translate(0,250)')
            .call(axisY);
            
            canvas
            .append('g')
            .attr('transform', 'translate(0,0)')
            .call(axisX);
        },
        
        drawChart: function(data) {
            var group = canvas.selectAll('.points')
            .data(data)
            .enter()
            .append('g');
            
            group
            .append('circle')
            .attr('r', 7)
            .attr('cx', function(d) {
                return x(d.date);
            })
            .attr('cy', function(d) {
                return y(d.value);
            })
            .attr('stroke', '#FFEB3B')
            .attr('stroke-width', 2);

            group
            .on('mouseover', mouserOverTransition)
            .on('mouseout', mouseOutTransition);
            
            
            group.append('text')
            .text('Hello')
            .attr('class','label')
            .style('display','none')
            .attr('x',function(d){return x(d.date)})
            .attr('y',function(d){return y(d.value)});
        
        },
        
        initLine: function() {
            
            line = d3.svg.line()
            .x(function(d) {
                return x(d.date);
            })
            .y(function(d) {
                return y(d.value);
            })
            .interpolate("linear");
            
            
            path = canvas.append('path')
            .attr('fill', 'none')
            .attr('stroke', '#000')
            .attr('stroke-width', 3);
        
        },
        
        drawLine: function() {
            path
            .attr("d", line(data));
        },
        setListeners: function(){
            d3.select('.day').on('click', function(){
                alert("day");
            });
            d3.select('.week').on('click', function(){
                alert("week");
            });
            d3.select('.month').on('click', function(){
                alert("month");
            });
        }
    };
    
    return h;

});

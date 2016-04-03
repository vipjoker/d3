/**
 * Created by oleh on 3/26/16.
 */


var myArray = [
    {name: 'oleh', points: 77},
    {name: 'ivan', points: 12},
    {name: 'petro', points: 24},
    {name: 'mikola', points: 54},
    {name: 'vasia', points: 45}
];


var lineAttr = [
    {x: 10, y: 20},
    {x: 20, y: 10},
    {x: 30, y: 44},
    {x: 40, y: 30},
    {x: 60, y: 10},
    {x: 80, y: 20}
];


var container = d3.select("svg");


var line = d3.svg
    .line()
    .x(function (d) {
        return d.x
    })
    .y(function (d) {
        return d.y
    });


var group = container.append('g').attr('transform', 'translate(100,100)');


group.selectAll('path').data([lineAttr]).enter().append('path')
    .attr('d', line)
    .attr('fill', 'none')
    .attr('stroke', '#000')
    .attr('stroke-width', '3');


container.selectAll('rect')
    .data(myArray)
    .enter()
    .append('rect')
    .attr('height', function (d) {
        return d.points
    })
    .attr('width', 10)
    .style('fill', '#f0f')
    .attr('x', function (d, i) {
        return i * 20
    });


d3.select(".add").on("click", function () {

    var points = Math.random() * 100;
    var name = Math.random() + "oleh";
    myArray.push({name: name, points: points});
    container.selectAll('rect')
        .data(myArray)
        .enter()
        .append('rect')
        .attr('height', function (d) {
            return d.points
        })
        .attr('width', 10)
        .style('fill', '#f0f')
        .attr('x', function (d, i) {
            return i * 20
        })
        .transition() // this transition runs from t=1s to t=3s
        .duration(2000);


});

d3.select(".delete").on("click", function () {

    myArray.pop();

    container.selectAll('rect')
        .data(myArray)
        .exit()
        .remove();


});


var arc = d3.svg.arc().innerRadius(30).outerRadius(40).startAngle(0).endAngle(2 * Math.PI);

var arcGroup = container.append('g').attr('transform', 'translate(150,200)');

arcGroup.append('path').attr('d', arc);


var acrArray = [20, 10, 80];
var color = d3.scale.ordinal().range(['red', 'blue', 'black']);


var arcChartGroup = container.append('g').attr('transform', 'translate(200,200)');

var arcLayout = d3.svg.arc()
    .innerRadius(150)
    .outerRadius(200);

var pie = d3.layout.pie()
    .value(function (d) {
        return d;
    });

var arcs = arcChartGroup.selectAll('.arc')
    .data(pie(acrArray))
    .enter()
    .append('g')
    .attr('class', 'arc');

arcs.append('path')
    .attr('d', arcLayout)
    .attr('fill', function (d) {
        return color(d.data)
    });

arcs.append('text')
    .attr('transform', function (d) {
        return 'translate(' + arc.centroid(d) + ')';
    })
    .text(function (d) {
        return d.data
    });







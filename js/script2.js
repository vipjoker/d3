var treemodel = {
    name: "max",
    children: [
        {
            name: "olga",
            children: [
                {name: "oleh"},
                {name: "ivan"},
                {name: "mikola"}
            ]

        },

        {
            name: "david",
            children: [
                {name: "sare"},
                {name: "mojsa"}
            ]
        }
    ]
};


var container = d3.select('.container')
    .append('svg')
    .attr('width', 500)
    .style('background-color','#f0f')
    .attr('height',500)
    .append('g').attr('transform','translate(50,50)');



var diagonal = d3.svg.diagonal()
    .source({x:10,y:10})
    .target({x:100,y:100});

container.append('path')
    .attr('fill','none')
    .attr('stroke','black')
    .attr('d', diagonal);


var tree = d3.layout.tree()
    .size([400,400]);


var nodes =tree.nodes(treemodel);
var links = tree.links(nodes);

    var node = container.selectAll('.node')
        .data(nodes)
        .enter()
        .append('g')
        .attr('class','node')
        .attr('transform',function(d){return "translate(" + d.x/2 + "," + d.y/2 +")"});

node.append('circle')
    .attr('r',5)
    .attr('fill','#fff');

node.append('text')
    .text(function(d){return d.name;});

var diagonal2 = d3.svg.diagonal().projection(function(d){return[d.x/2, d.y/2]});

container.selectAll('.link')
    .data(links)
    .enter()
    .append('path')
    .attr('class','link')
    .attr('fill','none')
    .attr('stroke', '#fff')
    .attr('d', diagonal2);



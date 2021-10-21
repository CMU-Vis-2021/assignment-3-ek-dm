import * as d3 from "d3";

d3.csv("../police_killings.csv").then((table) => {
  console.log(table);

  // let toolDiv = document.querySelector("#toolTip");
  let barDiv = document.querySelector("#d3-div");
  let padding = 30;
  
  let race = Array.from(d3.rollup(table, v => v.length, d => d.raceethnicity))
  // let race2 = Array.from(d3.rollup(table, v => v.length, d => d.raceethnicity, d => d.armed))
  // let race3 = race2.map(d => [d[0], Array.from(d[1])])
  
  console.log(race);
  // console.log(race2);
  // console.log(race3);

  let xScale = d3
  .scaleBand()
  .domain(race.map((d) => d[0]))
  .range([0 + padding, 700 - padding])
  .paddingInner(0.1);

  let yScale = d3
  .scaleLinear()
  .domain([0, d3.max(race, (d) => d[1])])
  .range([500, 0]);

  let tooltip = d3.select("body").append("d3-div").attr("class", "toolTip").style("opacity", 0);

  let svg = d3
  .select(barDiv)
  .append("svg")
  .attr("margin", {top: 20, right: 20, bottom: 30, left: 50})
  .attr("width", 700)
  .attr("height", 600);

  svg
  .selectAll("rect")
  .data(race)
  .enter()
  .append("rect")
  .attr("fill", "orange")
  .attr("x", (d) => xScale(d[0]))
  .attr("y", (d) => yScale(d[1]))
  .attr("width", xScale.bandwidth())
  .attr("height", (d) => 500 - yScale(d[1]))
  .on('mouseover', function(d, i) {
    console.log(i)
    d3.select(this).transition()
      .duration("50")
      .attr("opacity", "0.85")
    tooltip.transition()
        .duration(50)
        .style("opacity", 1);
    tooltip
        .style("left", (d3.pointer(d)) - 20 + "px")
        .style("top", (d3.pointer(d)) - 40 + "px")
        .style("display", "inline-block")
        .text("Race: " + i[0] + ", Count: " + i[1]);
    console.log(d3.pointer(d))
  })
  .on('mouseout', function(d, i) {
    d3.select(this).transition()
      .duration("50")
      .attr("opacity", "1")
    tooltip.transition()
        .duration("50")
        .style("opacity", 0);
  });

  let xAxis = d3.axisBottom(xScale);
  svg.append("g").attr("transform", "translate(0, 500)").call(xAxis);

  let yAxis = d3.axisLeft(yScale).tickFormat(d3.format(".0"));
  svg.append("g").attr("transform", `translate(${padding}, 0)`).call(yAxis);
});
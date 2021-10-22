import{c as h,r as m,b as v,l as x,m as b,s as c,p as u,a as A,f as L,d as w}from"./vendor.68e6df58.js";const O=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}};O();h("police_killings.csv").then(l=>{console.log(l);let n=document.querySelector("#d3-div"),i=30,o=Array.from(m(l,t=>t.length,t=>t.raceethnicity)),r=Array.from(m(l,t=>t.length,t=>t.raceethnicity,t=>t.armed)).map(t=>[t[0],Array.from(t[1])]);console.log(o),console.log(r);let a=v().domain(o.map(t=>t[0])).range([0+i,700-i]).paddingInner(.1),d=x().domain([0,b(o,t=>t[1])]).range([500,0]),p=c("body").append("d3-div").attr("class","toolTip").style("opacity",0),f=c(n).append("svg").attr("margin",{top:20,right:20,bottom:30,left:50}).attr("width",700).attr("height",600);f.selectAll("rect").data(o).enter().append("rect").attr("fill","orange").attr("x",t=>a(t[0])).attr("y",t=>d(t[1])).attr("width",a.bandwidth()).attr("height",t=>500-d(t[1])).on("mouseover",function(t,s){console.log(s),c(this).transition().duration("50").attr("opacity","0.85"),p.transition().duration(50).style("opacity",1),p.style("left",u(t)-20+"px").style("top",u(t)-40+"px").style("display","inline-block").text("Race: "+s[0]+", Count: "+s[1]),console.log(u(t))}).on("mouseout",function(t,s){c(this).transition().duration("50").attr("opacity","1"),p.transition().duration("50").style("opacity",0)});let y=w(a);f.append("g").attr("transform","translate(0, 500)").call(y);let g=A(d).tickFormat(L(""));f.append("g").attr("transform",`translate(${i}, 0)`).call(g)});

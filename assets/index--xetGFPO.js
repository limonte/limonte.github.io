import{tsParticles as m}from"https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.1.0/+esm";import{loadBasic as g}from"https://cdn.jsdelivr.net/npm/@tsparticles/basic@3.1.0/+esm";import{loadParticlesLinksInteraction as h}from"https://cdn.jsdelivr.net/npm/@tsparticles/interaction-particles-links@3.1.0/+esm";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();const A=async()=>{await g(m),await h(m),await m.load({id:"tsparticles",options:{particles:{number:{value:150},color:{value:["#aa73ff","#f8c210","#83d238","#33b1f8"]},links:{enable:!0,distance:150,opacity:.2},shape:{type:"circle"},opacity:{value:.2},size:{value:{min:2,max:4}},move:{enable:!0,speed:.2}},background:{color:"#000000"}}})},v=n=>{const r=n.offsetWidth,l=n.contentDocument,c=l.getElementById("symmetry-source"),t=l.getElementById("symmetry-target"),e=Array.from(c.querySelectorAll("path, polygon, line, circle"));for(let i=0;i<e.length;i++){const s=e[i],o=s.cloneNode(!0);if(s.getAttribute("symmetry-id")&&o.setAttribute("id",s.getAttribute("symmetry-id")),o.tagName==="line"){const u=r-parseInt(o.getAttribute("x1")),a=r-parseInt(o.getAttribute("x2"));o.setAttribute("x1",`${u}`),o.setAttribute("x2",`${a}`)}else if(o.tagName==="circle"){const u=r-parseInt(o.getAttribute("cx"));o.setAttribute("cx",`${u}`)}else{const u=o.tagName==="path"?"d":"points";let a=o.getAttribute(u).split(" ");for(let d=0;d<a.length;d++){let f=a[d].match(/(\d+),/);if(f){const y=r-parseInt(f[1]);a[d]=a[d].replace(/\d+,/,y+",")}else continue}o.setAttribute(u,a.join(" "))}t.appendChild(o)}},b=()=>{let n;window.addEventListener("load",()=>{const r=L("#head");v(r),n=r.contentDocument,n.onclick=l=>{const c=l.target;if(c.classList.contains("skill")&&!c.classList.contains("current")){const t=n.querySelector(".current");t&&t.classList.remove("current"),c.classList.add("current");const e=c.getAttribute("id"),i=p(".skill-box");Array.from(i).forEach(s=>{s.classList.remove("active"),s.style.height="0",s.style.opacity="0",s.style.top="400px",s.classList.contains(e)&&(s.classList.add("active"),s.style.height=`${s.scrollHeight}px`,s.style.top="430px",s.style.opacity="1")})}}}),Array.from(p(".close-button")).forEach(r=>{r.onclick=()=>{r.closest(".skill-box").classList.remove("active"),n.querySelector(".current").classList.remove("current")}})},L=document.querySelector.bind(document),p=document.querySelectorAll.bind(document);A();b();

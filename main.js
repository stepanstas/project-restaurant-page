(()=>{"use strict";function t(t){const e=document.createElement("p");return e.textContent=t,e}const e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("section");e.classList.add("home");const n=document.createElement("h2");n.classList.add("section-title"),n.textContent="Welcome to HealthFully";const s=document.createElement("img");return s.src="./images/raw-oysters.jpg",s.alt="Raw Oysters",e.appendChild(n),e.appendChild(t("We serve the best oysters in the world")),e.appendChild(s),e.appendChild(t("Please visit our menu page to see our menu")),e}())};function n(){const t=document.createElement("header");t.classList.add("header");const n=document.createElement("h1");return n.classList.add("logo"),n.textContent="HealthFully",t.appendChild(n),t.appendChild(function(){const t=document.createElement("nav");t.classList.add("navbar");const n=document.createElement("button");n.classList.add("nav-button"),n.textContent="Home",n.addEventListener("click",(t=>{t.target.classList.contains("active")||(s(n),e())}));const a=document.createElement("button");a.classList.add("nav-button"),a.textContent="Menu",a.addEventListener("click",(t=>{t.target.classList.contains("active")||(s(a),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("section");t.classList.add("menu");const e=document.createElement("h2");e.classList.add("section-title"),e.textContent="Menu",t.appendChild(e);const n=document.createElement("div");return n.classList.add("container-menu-items"),t.appendChild(n),[{name:"Garlic Oysters",imgSrc:"./images/garlic-oysters.jpg",imgAlt:"Garlic Oysters",description:"oysters, garlic"},{name:"Lemon Oysters",imgSrc:"./images/lemon-oysters.jpg",imgAlt:"Lemon Oysters",description:"oysters, lemon"},{name:"Lime Oysters",imgSrc:"./images/lime-oysters.jpg",imgAlt:"Lime Oysters",description:"oysters, lime"},{name:"Onion Oysters",imgSrc:"./images/onion-oysters.jpg",imgAlt:"Onion Oysters",description:"oysters, onions"},{name:"Leek Oysters",imgSrc:"./images/leek-oysters.jpg",imgAlt:"Leek Oysters",description:"oysters, leeks"},{name:"Basil Oysters",imgSrc:"./images/basil-oysters.jpg",imgAlt:"Basil Oysters",description:"oysters, mustard"}].forEach((t=>{const e=document.createElement("div");e.classList.add("menu-item"),n.appendChild(e);const s=document.createElement("h3");s.classList.add("menu-name"),s.textContent=t.name,e.appendChild(s);const a=document.createElement("img");a.setAttribute("src",t.imgSrc),a.setAttribute("alt",t.imgAlt),e.appendChild(a);const i=document.createElement("p");i.textContent=t.description,e.appendChild(i)})),t}())}())}));const i=document.createElement("button");return i.classList.add("nav-button"),i.textContent="Contact",i.addEventListener("click",(t=>{t.target.classList.contains("active")||(s(i),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("section");t.classList.add("contact");const e=document.createElement("h2");e.classList.add("section-title"),e.textContent="Contact";const n=document.createElement("p");n.textContent="Visit us in person at 1234 Oysters Rd, Oyster, USA, 12345";const s=document.createElement("a");s.setAttribute("href","tel:1234567"),s.textContent="Call us at 123-456-7891";const a=document.createElement("form");a.setAttribute("action","/"),a.setAttribute("method","post"),a.classList.add("contact-form"),document.createElement("h3").textContent="Send us a message";const i=document.createElement("label");i.setAttribute("for","name");const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("name","name"),c.setAttribute("id","name"),c.classList.add("form-input"),c.setAttribute("placeholder","Name"),c.setAttribute("autocomplete","off"),c.setAttribute("required",!0),i.appendChild(c);const o=document.createElement("label");o.setAttribute("for","phone");const r=document.createElement("input");r.setAttribute("type","tel"),r.setAttribute("name","phone"),r.setAttribute("id","phone"),r.classList.add("form-input"),r.setAttribute("placeholder","123-456-7890"),r.setAttribute("autocomplete","off"),r.setAttribute("required",!0),o.appendChild(r);const d=document.createElement("label");d.setAttribute("for","email");const l=document.createElement("input");l.setAttribute("type","email"),l.setAttribute("name","email"),l.setAttribute("id","email"),l.classList.add("form-input"),l.setAttribute("placeholder","email@email.com"),l.setAttribute("autocomplete","off"),l.setAttribute("required",!0),d.appendChild(l);const m=document.createElement("label");m.setAttribute("for","message");const u=document.createElement("textarea");u.setAttribute("name","message"),u.setAttribute("id","message"),u.classList.add("form-input"),u.setAttribute("cols","30"),u.setAttribute("rows","10"),u.setAttribute("required",!0),u.setAttribute("autocomplete","off"),u.setAttribute("minlength",10),u.setAttribute("placeholder","Message"),m.appendChild(u);const p=document.createElement("button");return p.setAttribute("type","submit"),p.textContent="Send",[i,o,d,m,p].forEach((t=>{const e=document.createElement("div");e.classList.add("form-group"),e.appendChild(t),a.appendChild(e)})),t.append(e,n,s,a),t}())}())})),t.appendChild(n),t.appendChild(a),t.appendChild(i),t}()),t}function s(t){document.querySelectorAll(".nav-button").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const t=document.getElementById("content");t.appendChild(n()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),t.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("small");return e.classList.add("copyright"),e.textContent=`Created by Štěpán Š. ${(new Date).getFullYear()}. All Rights Reserved.`,t.appendChild(e),t}()),s(document.querySelector(".nav-button")),e()}()})();
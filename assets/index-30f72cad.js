(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();(()=>{const c=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),r=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),c.classList.toggle("is-open")};o.addEventListener("click",r),t.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(c.classList.remove("is-open"),o.setAttribute("aria-expanded",!1))})})();new Swiper(".swiper-produckts",{grabCursor:!0,pagination:{el:".produckts-pagination",clickable:!0},zoom:{maxRatio:1.3,minRatio:1},breakpoints:{0:{slidesPerView:1},758:{slidesPerView:2.5},1200:{slidesPerView:4}}});new Swiper(".swiper-buy",{spaceBetween:16,grabCursor:!0,pagination:{el:".pagination-buy",clickable:!0},breakpoints:{375:{slidesPerView:1},1200:{slidesPerView:3}}});(function(c){typeof c.matches!="function"&&(c.matches=c.msMatchesSelector||c.mozMatchesSelector||c.webkitMatchesSelector||function(o){for(var t=this,r=(t.document||t.ownerDocument).querySelectorAll(o),e=0;r[e]&&r[e]!==t;)++e;return Boolean(r[e])}),typeof c.closest!="function"&&(c.closest=function(o){for(var t=this;t&&t.nodeType===1;){if(t.matches(o))return t;t=t.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var c=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),t=document.querySelectorAll(".js-modal-close");c.forEach(function(r){r.addEventListener("click",function(e){e.preventDefault();const n=this.getAttribute("data-modal"),i=document.querySelector('.modal[data-modal="'+n+'"]');switch(n){case"2":document.querySelector(".active").classList.remove("active"),i.classList.add("active");break;case"3":document.querySelector(".active").classList.remove("active"),i.classList.add("active");break;default:i.classList.add("active"),o.classList.add("active");break}})}),t.forEach(function(r){r.addEventListener("click",function(e){var n=this.closest(".modal");n.classList.remove("active"),o.classList.remove("active")})}),document.body.addEventListener("keyup",function(r){var e=r.keyCode;e==27&&(document.querySelectorAll(".modal.active").forEach(i=>i.classList.remove("active")),document.querySelector(".overlay").classList.remove("active"))},!1),o.addEventListener("click",function(){document.querySelectorAll(".modal.active").forEach(e=>e.classList.remove("active")),this.classList.remove("active")})});const a=[].slice.call(document.querySelectorAll('a[href*="#"]')),l=300,s=20;a.forEach(function(c){c.addEventListener("click",function(o){o.preventDefault();let t=document.querySelector(c.getAttribute("href")).getBoundingClientRect().top+window.pageYOffset,r=setInterval(function(){let e=t/s;e>window.pageYOffset-t&&window.innerHeight+window.pageYOffset<document.body.offsetHeight?window.scrollBy(0,e):(window.scrollTo(0,t),clearInterval(r))},l/s)})});
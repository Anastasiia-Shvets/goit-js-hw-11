import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function u(t){const s="42280765-41e7252ac679e023dc9db9847",o=t,n="https://pixabay.com",e="/api/",r=`?key=${s}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,l=n+e+r;return fetch(l).then(i=>{if(i.ok)return i.json();throw new Error(i.status)}).catch(i=>{console.error("There has been a problem with your fetch operation:",i)})}const a={formElem:document.querySelector(".form"),inptElem:document.querySelector(".text-form"),imagesElem:document.querySelector(".gallery")};a.formElem.addEventListener("submit",t=>{t.preventDefault();const s=t.target.elements.query.value.trim();if(s===""){c.error({title:"Sorry",message:"Please enter text to search for.",position:"topRight"});return}u(s).then(o=>{o.length===0?c.warning({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}):(m(o),console.log(o))}).catch(o=>{c.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.log(o)}),t.target.reset()});function f(t){return`<div class="img-card">
    <li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
    <img
        class="gallery-image"
        src="${t.webformatURL}"
        alt="${t.tags}"
        width=360
    />
    </a>
    </div>
    <div class="img-body">
    <h3 class="subtitle">'${t.likes}'<h3 class="subtitle">
    <h3 class="subtitle">'${t.views}'<h3 class="subtitle">
    <h3 class="subtitle">'${t.comments}'<h3 class="subtitle">
    <h3 class="subtitle">'${t.downloads}'<h3 class="subtitle">
    </div>
    </a>
    </li>`}function m(t){const s=f(t);a.imagesElem.innerHTML=s}
//# sourceMappingURL=commonHelpers.js.map

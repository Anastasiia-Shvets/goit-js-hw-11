import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function m(o){const s="42280765-41e7252ac679e023dc9db9847",e=o,n="https://pixabay.com",t="/api/",r=`?key=${s}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,l=n+t+r;return fetch(l).then(i=>{if(i.ok)return i.json();throw new Error(i.status)}).then(i=>i.hits.map(c=>({id:c.id,imageUrl:c.largeImageURL}))).catch(i=>{console.error("There has been a problem with your fetch operation:",i)})}const u={formElem:document.querySelector(".form"),inptElem:document.querySelector(".text-form"),imagesElem:document.querySelector(".gallery")};function h(o){const s=o.map(e=>`<div class="img-card">
    <li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
    <img
        class="gallery-image"
        src="${e.webformatURL}"
        alt="${e.tags}"
        width=360
    />
    </a>
    </div>
    <div class="img-body">
    <h3 class="subtitle">'${e.likes}'<h3 class="subtitle">
    <h3 class="subtitle">'${e.views}'<h3 class="subtitle">
    <h3 class="subtitle">'${e.comments}'<h3 class="subtitle">
    <h3 class="subtitle">'${e.downloads}'<h3 class="subtitle">
    </div>
    </a>
    </li>`).join();u.imagesElem.innerHTML=s}u.formElem.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.query.value.trim();if(s===""){a.error({title:"Sorry",message:"Please enter text to search for.",position:"topRight"});return}m(s).then(e=>{e.length===0?a.warning({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}):(h(e),console.log(e))}).catch(e=>{a.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.log(e)}),o.target.reset()});
//# sourceMappingURL=commonHelpers.js.map

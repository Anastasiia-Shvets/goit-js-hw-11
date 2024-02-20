import{S as d,i as m}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(l){const o="42280765-41e7252ac679e023dc9db9847",s=l,r="https://pixabay.com",e="/api/",t=`?key=${o}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`,n=r+e+t;return fetch(n).then(a=>{if(a.ok)return a.json();throw new Error(a.status)}).then(a=>a.hits.map(i=>({id:i.id,imageUrl:i.largeImageURL,webformatURL:i.webformatURL,tags:i.alt,likes:i.likes,views:i.views,comments:i.comments,downloads:i.downloads}))).catch(a=>{console.error("There has been a problem with your fetch operation:",a)})}const c={formElem:document.querySelector(".form"),inptElem:document.querySelector(".text-form"),imagesElem:document.querySelector(".gallery-cards"),loadElem:document.querySelector(".loader")};function f(l){const o=l.map(r=>`<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${r.imageUrl}">
    <img
        class="gallery-image"
        src="${r.webformatURL}"
        alt="${r.tags}"
        width=360
    />
    </a>
    <div class="gallery-info">
    <p class="item-text">Likes: ${r.likes}</p>
    <p class="item-text">Views: ${r.views}</p>
    <p class="item-text">Comments: ${r.comments}</p>
    <p class="item-text">Downloads: ${r.downloads}</p>
    </div>
    </div>
    </li>`).join("");c.imagesElem.innerHTML=o,new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}c.formElem.addEventListener("submit",l=>{l.preventDefault();const o=l.target.elements.query.value.trim();if(o===""){m.error({title:"Sorry",message:"Please enter text to search for.",position:"topRight"});return}c.loadElem.classList.add("loader"),u(o).then(s=>{c.loadElem.classList.remove("loader"),s.length===0?m.warning({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}):(f(s),console.log(s))}).catch(s=>{c.loadElem.style.display="none",m.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.log(s)}),l.target.reset()});
//# sourceMappingURL=commonHelpers.js.map

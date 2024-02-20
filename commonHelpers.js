import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function u(o){const s="42280765-41e7252ac679e023dc9db9847",e=o,a="https://pixabay.com",t="/api/",r=`?key=${s}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,l=a+t+r;return fetch(l).then(n=>{if(n.ok)return n.json();throw new Error(n.status)}).then(n=>n.hits.map(i=>({id:i.id,imageUrl:i.largeImageURL,webformatURL:i.webformatURL,tags:i.alt,likes:i.likes,views:i.views,comments:i.comments,downloads:i.downloads}))).catch(n=>{console.error("There has been a problem with your fetch operation:",n)})}const m={formElem:document.querySelector(".form"),inptElem:document.querySelector(".text-form"),imagesElem:document.querySelector(".gallery-cards")};function f(o){const s=o.map(e=>(console.log(o),`<li class="gallery-item">
    <div class="img-card">
    <a class="gallery-link" href="${e.largeImageURL}">
    <img
        class="gallery-image"
        src="${e.webformatURL}"
        alt="${e.tags}"
        width=360
    />
    </a>
    <p class="item-text">Likes: ${e.likes}</p>
    <p class="item-text">Views: ${e.views}</p>
    <p class="item-text">Comments: ${e.comments}</p>
    <p class="item-text">Downloads: ${e.downloads}</p>
    </div>
    </a>
    </li>
    </div>`)).join("");m.imagesElem.innerHTML=s}m.formElem.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.query.value.trim();if(s===""){c.error({title:"Sorry",message:"Please enter text to search for.",position:"topRight"});return}u(s).then(e=>{e.length===0?c.warning({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}):(f(e),console.log(e))}).catch(e=>{c.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.log(e)}),o.target.reset()});
//# sourceMappingURL=commonHelpers.js.map

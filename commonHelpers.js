import{S as d,i as m}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function u(s){const o="42280765-41e7252ac679e023dc9db9847",l=s,r="https://pixabay.com",e="/api/",t=`?key=${o}&q=${l}&image_type=photo&orientation=horizontal&safesearch=true`,c=r+e+t;return fetch(c).then(a=>{if(a.ok)return a.json();throw new Error(a.status)}).then(a=>a.hits.map(i=>({id:i.id,imageUrl:i.largeImageURL,webformatURL:i.webformatURL,alt:i.tags,likes:i.likes,views:i.views,comments:i.comments,downloads:i.downloads}))).catch(a=>{console.error("There has been a problem with your fetch operation:",a)})}const n={formElem:document.querySelector(".form"),inptElem:document.querySelector(".text-form"),imagesElem:document.querySelector(".gallery-cards"),loadElem:document.querySelector(".loader")};function y(s){const o=s.map(r=>`<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${r.imageUrl}">
    <img
        class="gallery-image"
        src="${r.webformatURL}"
        alt="${r.alt}"
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
    </li>`).join("");n.imagesElem.innerHTML=o,new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}n.loadElem.style.display="none";n.formElem.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.query.value.trim();if(o===""){m.error({title:"Sorry",message:"Please enter text to search for.",position:"topRight"});return}n.loadElem.style.display="block",u(o).then(l=>{n.loadElem.style.display="none",l.length===0?m.warning({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}):y(l)}).catch(l=>{n.loadElem.style.display="none",m.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}),s.target.reset()});
//# sourceMappingURL=commonHelpers.js.map

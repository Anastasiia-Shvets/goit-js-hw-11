import{S as m,i as c}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(i){const s="42280765-41e7252ac679e023dc9db9847",r=i,o="https://pixabay.com",e="/api/",t=`?key=${s}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`,a=o+e+t;return fetch(a).then(n=>{if(n.ok)return n.json();throw new Error(n.status)}).then(n=>n.hits.map(l=>({id:l.id,imageUrl:l.largeImageURL,webformatURL:l.webformatURL,tags:l.alt,likes:l.likes,views:l.views,comments:l.comments,downloads:l.downloads}))).catch(n=>{console.error("There has been a problem with your fetch operation:",n)})}const u={formElem:document.querySelector(".form"),inptElem:document.querySelector(".text-form"),imagesElem:document.querySelector(".gallery-cards")};function d(i){const s=i.map(o=>(console.log(i),`<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${o.largeImageURL}">
    <img
        class="gallery-image"
        src="${o.webformatURL}"
        alt="${o.tags}"
        title=""
        width=360
    />
    </a>
    <p class="item-text">Likes: ${o.likes}</p>
    <p class="item-text">Views: ${o.views}</p>
    <p class="item-text">Comments: ${o.comments}</p>
    <p class="item-text">Downloads: ${o.downloads}</p>
    </div>
    </a>
    </li>
    </div>`)).join("");u.imagesElem.innerHTML=s;let r=new m(".gallery a");r.on("show.simplelightbox",function(){m(r)})}u.formElem.addEventListener("submit",i=>{i.preventDefault();const s=i.target.elements.query.value.trim();if(s===""){c.error({title:"Sorry",message:"Please enter text to search for.",position:"topRight"});return}f(s).then(r=>{r.length===0?c.warning({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}):(d(r),console.log(r))}).catch(r=>{c.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.log(r)}),i.target.reset()});
//# sourceMappingURL=commonHelpers.js.map

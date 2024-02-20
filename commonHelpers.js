import{S as u,i as c}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function f(o){const s="42280765-41e7252ac679e023dc9db9847",e=o,a="https://pixabay.com",t="/api/",r=`?key=${s}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,n=a+t+r;return fetch(n).then(l=>{if(l.ok)return l.json();throw new Error(l.status)}).then(l=>l.hits.map(i=>({id:i.id,imageUrl:i.largeImageURL,webformatURL:i.webformatURL,tags:i.alt,likes:i.likes,views:i.views,comments:i.comments,downloads:i.downloads}))).catch(l=>{console.error("There has been a problem with your fetch operation:",l)})}const m={formElem:document.querySelector(".form"),inptElem:document.querySelector(".text-form"),imagesElem:document.querySelector(".gallery-cards")};function d(o){const s=o.map(e=>`<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${e.largeImageURL}">
    <img
        class="gallery-image"
        src="${e.webformatURL}"
        alt="${e.tags}"
        title=""
        width=360
    />
    </a>
    <div class="gallery-info">
    <p class="item-text">Likes: ${e.likes}</p>
    <p class="item-text">Views: ${e.views}</p>
    <p class="item-text">Comments: ${e.comments}</p>
    <p class="item-text">Downloads: ${e.downloads}</p>
    </div>
    </div>
    </li>`).join("");m.imagesElem.innerHTML=s,new u(".gallery a",{captionsData:"alt",captionDelay:250})}m.formElem.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.query.value.trim();if(s===""){c.error({title:"Sorry",message:"Please enter text to search for.",position:"topRight"});return}f(s).then(e=>{e.length===0?c.warning({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}):(d(e),console.log(e))}).catch(e=>{c.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),console.log(e)}),o.target.reset()});
//# sourceMappingURL=commonHelpers.js.map

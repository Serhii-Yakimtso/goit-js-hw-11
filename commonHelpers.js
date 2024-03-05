import{S as f,i as m}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();function p(s){return fetch(`https://pixabay.com/api/?key=42676798-23985956bba61249a12f13dde&q=${s}&image_type=photo&orientation=horizontal&safesearch =true`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function h(s,r){const o=s.hits.map(({webformatURL:t,largeImageURL:e,tags:a,likes:i,views:c,comments:d,downloads:u})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${e}"
              ><img
                class="gallery-img"
                src="${t}"
                alt="${a}"
                width="360"
                height="152"
            /></a>
            <ul class="data-list">
              <li class="data-item likes">
                <p class="data-name">Likes</p>
                <p class="data-value">${i}</p>
              </li>
              <li class="data-item views">
                <p class="data-name">Views</p>
                <p class="data-value">${c}</p>
              </li>
              <li class="data-item comments">
                <p class="data-name">Comments</p>
                <p class="data-value">${d}</p>
              </li>
              <li class="data-item downloads">
                <p class="data-name">Downloads</p>
                <p class="data-value">${u}</p>
              </li>
            </ul>
          </li>
`).join("");r.insertAdjacentHTML("beforeend",o),r.classList.remove("hidden")}const g="/goit-js-hw-11/assets/error-84d0b865.svg",y=document.querySelector(".form"),l=document.querySelector(".gallery-list"),n=document.querySelector(".loader"),L=new f(".gallery-list a",{captionsData:"alt",captionDelay:250});y.addEventListener("submit",v);function v(s){s.preventDefault(),b(),w();const o=s.target.elements.tag.value;p(o).then(t=>{t.hits.length===0?m.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",iconUrl:g,position:"topRight",backgroundColor:"#ef4040"}):(h(t,l),S(),L.refresh())}).catch(t=>console.log(t))}function b(){l.innerHTML="",l.classList.add("hidden")}function w(){n.classList.remove("hidden")}function S(){n.classList.add("hidden")}l.addEventListener("click",$);function $(s){s.preventDefault(),s.target.nodeName}
//# sourceMappingURL=commonHelpers.js.map

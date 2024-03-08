import{S as g,i as c}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();function y(s){return fetch(`https://pixabay.com/api/?key=42676798-23985956bba61249a12f13dde&q=${s}&image_type=photo&orientation=horizontal&safesearch =true`).then(t=>{if(!t.ok)throw new Error(`Error ${t.statusText}`);return t.json()})}function L(s,r,o){const t=s.hits.map(({webformatURL:e,largeImageURL:a,tags:i,likes:f,views:m,comments:p,downloads:h})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${a}"
              ><img
                class="gallery-img"
                src="${e}"
                alt="${i}"
                width="360"
                height="152"
            /></a>
            <ul class="data-list">
              <li class="data-item likes">
                <p class="data-name">Likes</p>
                <p class="data-value">${f}</p>
              </li>
              <li class="data-item views">
                <p class="data-name">Views</p>
                <p class="data-value">${m}</p>
              </li>
              <li class="data-item comments">
                <p class="data-name">Comments</p>
                <p class="data-value">${p}</p>
              </li>
              <li class="data-item downloads">
                <p class="data-name">Downloads</p>
                <p class="data-value">${h}</p>
              </li>
            </ul>
          </li>
`).join("");r.insertAdjacentHTML("beforeend",t),o.classList.add("hidden"),r.classList.remove("hidden")}const d="/goit-js-hw-11/assets/error-84d0b865.svg",u=document.querySelector(".form"),n=document.querySelector(".gallery-list"),l=document.querySelector(".loader"),b=new g(".gallery-list a",{captionsData:"alt",captionDelay:250});u.addEventListener("submit",v);function v(s){s.preventDefault(),w();const o=s.target.elements.tag.value.trim();if(o===""){c.show({message:"Sorry, enter the tag",messageColor:"#fafafb",messageSize:"16px",iconUrl:d,position:"topRight",backgroundColor:"#ef4040"});return}S(),y(o).then(t=>{t.hits.length===0?($(),c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",iconUrl:d,position:"topRight",backgroundColor:"#ef4040"})):(L(t,n,l),b.refresh())}).catch(t=>t),u.reset()}function w(){n.innerHTML="",n.classList.add("hidden")}function S(){l.classList.remove("hidden")}function $(){l.classList.add("hidden")}n.addEventListener("click",E);function E(s){s.target.nodeName}
//# sourceMappingURL=commonHelpers.js.map

import{S as c,i}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function l(){const o=document.getElementById("loader");o.style.display="block"}function d(){const o=document.getElementById("loader");o.style.display="none"}const m="46931303-4adba5c677ceeed1d52c819f0",u="https://pixabay.com/api/",f={image_type:"photo",orientation:"horizontal",safesearch:!0};async function p(o,s=1,a=12,r=f){const e=`${u}?key=${m}&q=${encodeURIComponent(o)}&page=${s}&per_page=${a}&image_type=${r.image_type}&orientation=${r.orientation}&safesearch=${r.safesearch}`;l();try{const t=await fetch(e);if(!t.ok)throw new Error("Error fetching images");return(await t.json()).hits}catch(t){throw console.error(t),t}finally{d()}}function y(o){const s=document.querySelector(".gallery");s.innerHTML="";function a(){const e=document.getElementById("loader");e.style.display="block"}function r(){const e=document.getElementById("loader");e.style.display="none"}a(),setTimeout(()=>{o.forEach(t=>{const n=document.createElement("div");n.classList.add("image-card"),n.innerHTML=`
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="img-details">
     <div class="coms"> <p>Likes</p> ${t.likes}</div>
      <div class="coms"><p>Views</p> ${t.views}</div>
      <div class="coms"><p>Comments</p> ${t.comments}</div>
      <div class="coms"><p>Downloads</p> ${t.downloads}</div>
      </div>
    `,s.appendChild(n)}),new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),r()},2e3)}function g(o){i.error({title:"Error",message:o.message,position:"topRight",timeout:5e3})}const h=document.querySelector("#form");h.addEventListener("submit",async o=>{o.preventDefault();function s(){const e=document.getElementById("loader");e.style.display="block"}function a(){const e=document.getElementById("loader");e.style.display="none"}const r=o.target.elements.query.value.trim();if(!r){s(),setTimeout(()=>{i.error({title:"Sorry,",message:"there are no images matching your search query. Please, try again!",position:"topRight",timeout:3e3}),a()},2e3);return}try{const e=await p(r);y(e)}catch(e){g(e)}});
//# sourceMappingURL=index.js.map

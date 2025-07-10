 const $ = (selector) => document.querySelector(selector);

function updateSlideInfo() {
  const actSlide = $(".act");
  if (!actSlide) return;

  const title = actSlide.getAttribute("data-title") || "Sem título";
  const desc = actSlide.getAttribute("data-desc") || "Sem descrição";
  const link1 = actSlide.getAttribute("data-link1") || "#";
  const link2 = actSlide.getAttribute("data-link2") || "#";

  const techClasses = actSlide.getAttribute("data-tech") || "";

  $("#slide-title").textContent = title;
  $("#slide-desc").textContent = desc;
  $("#link1").href = link1;
  $("#link2").href = link2;

  const techIconsContainer = $("#tech-icons");
  techIconsContainer.innerHTML = "";

  if (techClasses) {
    techClasses.split(" ").forEach((cls) => {
      const i = document.createElement("i");
      i.className = `fab ${cls}`;
      i.title = cls.replace("fa-", "").toUpperCase();
      techIconsContainer.appendChild(i);
    });
  }
}


function next() {
  const hideEl = document.querySelector(".hide");
  const prevEl = document.querySelector(".prev");
  const actEl = document.querySelector(".act");
  const nextEl = document.querySelector(".next");
  const newNextEl = document.querySelector(".new-next");

  
  if (hideEl) hideEl.classList.remove("hide");
  if (prevEl) prevEl.classList.remove("prev");
  if (actEl) actEl.classList.remove("act");
  if (nextEl) nextEl.classList.remove("next");
  if (newNextEl) newNextEl.classList.remove("new-next");

 
  if (prevEl) prevEl.classList.add("hide");
  if (actEl) actEl.classList.add("prev");
  if (nextEl) nextEl.classList.add("act");
  if (newNextEl) newNextEl.classList.add("next");

  
  const items = Array.from(document.querySelectorAll(".list li"));

  
  let newNextIndex = items.indexOf(newNextEl);
  if (newNextIndex === -1) {
 
    newNextIndex = items.indexOf(nextEl);
  }
  let nextNewNextIndex = (newNextIndex + 1) % items.length;
  items[nextNewNextIndex].classList.add("new-next");

  updateSlideInfo();
}


function prev() {
  const hideEl = document.querySelector(".hide");
  const prevEl = document.querySelector(".prev");
  const actEl = document.querySelector(".act");
  const nextEl = document.querySelector(".next");
  const newNextEl = document.querySelector(".new-next");

 
  if (hideEl) hideEl.classList.remove("hide");
  if (prevEl) prevEl.classList.remove("prev");
  if (actEl) actEl.classList.remove("act");
  if (nextEl) nextEl.classList.remove("next");
  if (newNextEl) newNextEl.classList.remove("new-next");

 
  if (nextEl) nextEl.classList.add("new-next");
  if (actEl) actEl.classList.add("next");
  if (prevEl) prevEl.classList.add("act");
  if (hideEl) hideEl.classList.add("prev");

  

  const items = Array.from(document.querySelectorAll(".list li"));

  let hideIndex = items.indexOf(hideEl);
  if (hideIndex === -1) {
    //
    hideIndex = items.indexOf(prevEl);
  }
  let newHideIndex = (hideIndex - 1 + items.length) % items.length;
  items[newHideIndex].classList.add("hide");

  updateSlideInfo();
}


document.getElementById("btn-prev").onclick = () => prev();
document.getElementById("btn-next").onclick = () => next();


updateSlideInfo();
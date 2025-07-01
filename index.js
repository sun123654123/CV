'use strict'

//title nice to meet you
const nicetoMeetyou = document.querySelector('.title--nicetoMeetyou');
const niceFunction = function(){
  nicetoMeetyou.style.opacity = 1;
}
niceFunction();

//email
document.getElementById("copyButton").addEventListener("click", function () {
  const email = "kenny123654@msn.cn";
  const el = document.createElement("textarea");
  el.value = email;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  const popup = document.getElementById("popup");
  if (
    popup.classList.contains("fade-in") ||
    popup.classList.contains("fade-out")
  ) {
    popup.classList.remove("fade-in", "fade-out");
  }
  setTimeout(() => {
    popup.classList.add("fade-in");
    setTimeout(() => {
      popup.classList.remove("fade-in");
      popup.classList.add("fade-out");
    }, 1000);
  }, 10);
});

//nav
const nav = document.querySelector(".nav");
const header = document.querySelector('header');
const stickyNavigation = function (entries, observer){
  const [entry] = entries;
  if(!entry.isIntersecting){nav.classList.add('sticky','gradient-background');
    header.classList.remove("py-3");
  }
  else{ nav.classList.remove('sticky','gradient-background');
    header.classList.add("py-3");
    
    ;}
}

const observer = new IntersectionObserver(stickyNavigation, {root:null, threshold:0,rootMargin: "500px"});
observer.observe(header);

//scrolling section
const sectionScrolling = document.querySelectorAll('.sction__scrolling');

const scorllingTtile = function(entries,observer){
  const [entry] = entries;
  if(!entry.isIntersecting)return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(scorllingTtile, {root: null, threshold: 0.12,})
sectionScrolling.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

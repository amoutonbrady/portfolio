function c(a){var b=a.target.parentElement,c=a.target.previousElementSibling;b.classList.contains("focused")&&c.classList.contains("active")?""!==a.target.value||a.target.hasAttribute("required")?""===a.target.value&&a.target.hasAttribute("required")?(c.classList.remove("active","active-color"),c.classList.add("error-color"),b.classList.remove("focused"),b.classList.add("mandatory")):(b.classList.remove("focused","mandatory"),c.classList.remove("active-color","error-color")):(b.classList.remove("focused"),c.classList.remove("active","active-color")):(b.classList.contains("mandatory")&&c.classList.contains("error-color")&&(b.classList.remove("mandatory"),c.classList.remove("error-color")),b.classList.add("focused"),c.classList.add("active","active-color"))}for(var a=document.querySelectorAll(".input"),b=0;b<a.length;b++)a[b].addEventListener("focus",c,!1),a[b].addEventListener("blur",c,!1);var d=document.querySelector(".main-content"),e=document.querySelector(".header").offsetHeight;d.style.height="calc(100vh - "+e+"px)";var f=document.querySelector(".btn-open-nav"),g=document.querySelector(".btn-close-nav"),h=document.querySelector(".navigation--mobile");f.onclick=function(){h.classList.contains("show")||h.classList.add("show")},g.onclick=function(){h.classList.contains("show")&&h.classList.remove("show")};var i=location.protocol+"//"+location.host+location.pathname,j=document.querySelector(".logo");j.href=i;var k=document.querySelectorAll(".nav__item"),l=document.querySelector(".nav__position"),m=document.querySelector(".nav__item--active");l.style.width=window.getComputedStyle(m,null).getPropertyValue("width"),console.log(m.offsetLeft);for(var b=0;b<k.length;b++)k[b].onmouseover=function(){var a=window.getComputedStyle(this,null).getPropertyValue("width"),b=this.offsetLeft;prop={width:a,left:"translateX("+b+"px)"},this.classList.contains("nav__item--hover")||(this.classList.add("nav__item--hover"),l.style.width=prop.width,l.style.transform=prop.left)},k[b].onmouseout=function(){this.classList.contains("nav__item--hover")&&(this.classList.remove("nav__item--hover"),l.style.width=window.getComputedStyle(m,null).getPropertyValue("width"),l.style.transform="translateX("+m.offsetLeft+"px)")}
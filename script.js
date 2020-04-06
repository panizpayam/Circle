window.addEventListener("mousemove", function(event){
  
  document.getElementsByClassName("circle")[0].style.top = (event.clientY - 180) + "px";
  document.getElementsByClassName("circle")[0].style.left = (event.clientX - 180) + "px";
});


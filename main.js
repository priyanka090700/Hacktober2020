function display(color){
  document.body.style.backgroundColor=color;
}

document.getElementById("color").addEventListener("input",function(){
  let color = this.value
  document.querySelector(".preview").style.backgroundColor  = color
});
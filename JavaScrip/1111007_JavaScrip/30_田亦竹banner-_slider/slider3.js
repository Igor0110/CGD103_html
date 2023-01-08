function $id(id) {
  //$id("btnLeft")
  return document.getElementById(id); //document.getElementById("btnLeft")
}

window.addEventListener("load", function () {
  let wrap = document.querySelector(".wrap");
  let curIndex = 0;
  //-----------------------------------------btnLeft.onclick
  document.querySelector("#btnLeft").onclick = function () {
    curIndex--;
    wrap.style.left = -310*curIndex +"px";
    document.querySelector("#btnRight").disabled = false;
    if (curIndex == 0){
      document.querySelector("#btnLeft").disabled = true;
    }
   
  };
  //-----------------------------------------btnRight.onclick

  document.querySelector("#btnRight").onclick = function () {
    curIndex++;
    wrap.style.left = -310*curIndex +"px";
    document.querySelector("#btnLeft").disabled = false;
    if (curIndex == 5){
      document.querySelector("#btnRight").disabled = true;
    }
   
  };

 
});

function $id(id) {
  //$id("btnLeft")
  return document.querySelector(`#${id}`); //document.getElementById("btnLeft")
}

window.addEventListener("load", function () {
  let wrap = document.querySelector(".wrap");
  // wrap.style.left = "5px";
  let curIndex = 0;
  //-----------------------------------------btnLeft.onclick
  $id("btnLeft").onclick = function () {
    $id("btnRight").disabled = false;
    if ($id("btnLeft").disabled) {
      return;
    } else if (curIndex === 1) {
      curIndex--;
      $id("btnLeft").disabled = true;
      wrap.style.left = `${-curIndex * 310}px`;
    } else {
      curIndex--;
      wrap.style.left = `${-curIndex * 310}px`;
    }
  };
  //-----------------------------------------btnRight.onclick
  $id("btnRight").onclick = function () {
    $id("btnLeft").disabled = false;

    if ($id("btnRight").disabled) {
      return;
    } else if (curIndex === 4) {
      curIndex++;
      $id("btnRight").disabled = true;
      wrap.style.left = `${-(curIndex * 310)}px`;
    } else {
      curIndex++;
      wrap.style.left = `${-(curIndex * 310)}px`;
    }
  };
});

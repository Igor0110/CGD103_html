function $id(id){ //"btnRight"
    return document.getElementById(id);
}


window.addEventListener("load", function(){

    let wrap = document.querySelector(".wrap");
    let curIndex = 0;
    console.log(curIndex)
    //-----------------------------------------btnLeft.onclick
    $id("btnLeft").onclick = function(){
        curIndex--;
        wrap.style.left = -310*curIndex + "px";
        $id("btnRight").disabled = false;

        if(curIndex == 0){
            $id("btnLeft").disabled = true;
        }
     }
    //-----------------------------------------btnRight.onclick
    $id("btnRight").onclick = function(){
        console.log(curIndex)
        curIndex++;
        wrap.style.left = -310*curIndex + "px";
        $id("btnLeft").disabled = false;
    
        if(curIndex == 5){
            $id("btnRight").disabled = true;
        }
    }

    //-----------------------------------------btnRight.onclick
    /*
    $id("btnRight").onclick = function(){
        curIndex++;
        wrap.style.left = -310*curIndex + "px";
        $id("btnLeft").disabled = false;

        if(curIndex == 5){
            wrap.style.left = "5px";
            curIndex = 0;
            $id("btnLeft").disabled = true;
        }
    }
    */
})
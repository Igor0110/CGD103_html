function doFirst(){
    //先跟HTML畫面產生關聯  再建事件聆聽
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    // alert(canvas.style.border) //JS無法直接抓CSS
    //如何用JS去抓CSS的屬性或是內容
    let ans= window.getComputedStyle(canvas).border
    // alert(ans)
    //作為JS跟CSS溝通的管道。
    // let ans= window.getComputedStyle('物件','::before').border
    //window可以省略


    context.fillStyle='red';
    context.strokeStyle='blue';
    context.lineWidth=10;
    //canvas 不可以寫單位
    
    

    context.fillRect(100,100,300,200)
    context.strokeRect(100,100,300,200)
    // context.rect(700,600,300,200)
    context.rect(700, 600, 300, 200);
    
    context.fill()
    context.clearRect(150, 150, 50, 50);
    
    //橡皮擦
    // context.clearRect(0 , 0, 1000, 800)
    // context.clearRect(0 , 0, canvas.width, canvas.height)

}
window.addEventListener('load',doFirst)
// window.onload = doFirst
// window.onload = function()
// window.addEventListener('load',function(){})
// window.addEventListener('load',() => {})

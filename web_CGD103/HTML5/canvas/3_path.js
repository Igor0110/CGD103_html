function doFirst(){
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d');
    
    context.strokeStyle='red';
    context.lineWidth=10;
    

    context.moveTo(100, 100);
    context.lineTo(250, 250);
    context.lineTo(400, 50);
    context.lineTo(50, 200);
    context.closePath();  //道路封閉
    
    
    
    context.stroke();  //畫線
    context.fill();   //填滿
    
    
}
window.addEventListener('load',doFirst)
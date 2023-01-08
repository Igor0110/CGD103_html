function doFirst(){    
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    let canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')

    // 格線
    context.beginPath();
    for(let i = 0; i < 100; i++){
        let interval = i * 50
        // 水平線
        context.moveTo(           0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);

        // 垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 8);        
    }
    context.strokeStyle='rgba(0,0,0,0.3)';    
    context.stroke();
    // ============

    context.strokeStyle='red'; 
    context.lineWidth=5;
     
    context.beginPath();
    context.arc(300, 200, 150, 0, Math.PI, false);
    context.stroke();

    context.beginPath();
    context.arc(700, 200, 150, 0, Math.PI,true);
    context.stroke();

    context.beginPath();
    context.arc(300, 600, 150, 0, 2*Math.PI);
    context.stroke();
    

   
}
window.addEventListener('load',doFirst)
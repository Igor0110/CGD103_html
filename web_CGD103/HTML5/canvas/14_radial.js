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

    let gradient = context.createRadialGradient(350, 225, 50, 350, 225, 150);
    
    gradient.addColorStop(0, 'red');   //相對位置100,100 是0的位置
    gradient.addColorStop(1, 'blue'); //相對位置600,500 是1的位置
    // gradient.addColorStop(0.5, 'yellow');
    
    context.fillStyle = gradient;
    context.fillRect(100,100,500,250);



    //
context.translate(300, 600);

context.lineWidth=15;

let circleGradient = context.createRadialGradient(0, 0, 150-7.5, 0, 0, 150+7.5);
circleGradient.addColorStop(0, '#666');
circleGradient.addColorStop(0.5, '#');
circleGradient.addColorStop(1, '#');


context.beginPath();

context.arc(0, 0, 150, 0,2*Math.PI);
context.stroke();


    
}
window.addEventListener('load',doFirst)


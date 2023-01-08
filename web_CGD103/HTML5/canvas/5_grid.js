function doFirst(){
    //先跟 HTML畫面產生關聯，再建事件聆聽功能
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d');
    
    //格線
    for(let i = 0; i <100; i++){
        let interval = i *50  //17~50 不要看不到字
        //水平線
        context.moveTo(           0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);
        

        //垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval,10 );
        
        
        
    }
    context.strokeStyle='rgb(0,0,0,0.3)';
    context.stroke();
    //格線========
    

}
window.addEventListener('load',doFirst)


    // //水平線
    // context.moveTo(0, 50);
    // context.lineTo(1000, 50);

    // context.moveTo(0, 100);
    // context.lineTo(1000, 100);

    // context.stroke();
    
    
    
        
    // //垂直線
    // context.moveTo(50, 0);
    // context.lineTo(50, 800);
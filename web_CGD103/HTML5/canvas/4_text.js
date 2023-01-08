function doFirst(){
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d');
    
    //文字出現之前設定font
    context.font='bold 50px Tahoma';
    // context.textBaseline='top | hanging | middle | alphabetic | ideographic | bottom';
    // context.textBaseline='alphabetic';  //在基準線上
    
    //第一個字
    context.fillText('gggstyle', 100, 100);
    // context.strokeText('style', 100, 100);
    

    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.strokeStyle='red';
    context.stroke();
        
    // 第二個字
    context.shadowColor='rgba(255,0,0,0.7)';
    context.shadowOffsetX=5;
    context.shadowOffsetY=3;
    context.shadowBlur=5;
    
    context.fillText('Style', 100, 250);
    
    // 第三個字

    context.shadowOffsetX=0;
    context.shadowOffsetY=0;
    context.shadowBlur=10;
    
    context.fillStyle='#fff';
    
    context.fillText('Style', 100, 400);
    
    // 第四個字

        
    context.fillText('Style', 100, 550);
    
    context.shadowColor='blue';
    context.fillText("Style", 100, 550);
    
}
window.addEventListener('load',doFirst)
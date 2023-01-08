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
        context.fillText(interval, interval,8 );
        
    }
    context.strokeStyle='rgb(0,0,0,0.3)';
    context.stroke();
    //格線========
    pic1 = new Image()   //物件導向寫法 要用New
    pic1.src = '../../images/cityscape.jpg'
    pic1.addEventListener('load',loadImage)
    // pic1.addEventListener('load',function(){
    //     context.drawImage(pic1, 0, 0, canvas.width,canvas.height);

    // })


    pic2 = new Image()   //物件導向寫法 要用New
    pic2.src = '../../images/Shinnosuke/Shinnosuke9.png'
    pic2.addEventListener('load',loadImage)

    // pic2.addEventListener('load',function(){
        // context.drawImage(pic2,0,0, 300, 300);  //左上角
        // context.drawImage(pic2,700,0, 300, 300);   //右上角~
        // context.drawImage(pic2,0,500, 300, 300);   //左下角~
        // context.drawImage(pic2,700,500, 300, 300);   //左下角~


    // })
function loadImage(){
    context.globalAlpha=0.5;
    context.context.drawImage(pic1, 0, 0,canvas.width,canvas.height);
    
    context.globalAlpha=1;
    context.drawImage(pic2, 0, 500,300,300); //左下角
    
}

}
window.addEventListener('load',doFirst)
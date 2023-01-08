function doFirst(){
    
    //先跟 HTML 畫面產生關連，在建立事件聆聽功能
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')  
    
    
    // context.textBaseline='top | hanging | middle | alphabetic | ideographic | bottom';
    
    //格線
    for(let i = 0; i<100 ; i++){
        let interval = i*50

        //水平線
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval); 
        context.fillText(interval, 0, interval);
        

        //垂直線
        context.moveTo( interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText( interval, interval, 10);

    }

    context.strokeStyle='rgba(0, 0, 0, 0.3)';
    context.stroke();  
    //==========================


    //四分之一層
    context.beginPath();

    context.moveTo(0, canvas.height/2);
    context.lineTo(canvas.width, canvas.height/2);

    context.moveTo(canvas.width/2, 0);
    context.lineTo(canvas.width/2, canvas.height);

    context.strokeStyle='rgba(0, 0, 0, 0.7)';
    context.stroke();  



    context.strokeStyle='red';
    context.lineWidth=5;
    
    //左上

    context.translate(250, 200);//從此，圓心由(250, 200)=>(0, 0)
    
    context.beginPath();
    context.arc(0, 0, 150, 0, Math.PI, false);
    context.stroke();
    context.translate(-250, -200);//圓心歸位(0, 0)=>(250, 200)


    //右上
    context.translate(750, 200);

    context.beginPath();
    context.arc(0, 0, 150, 0, Math.PI, true);
    context.stroke();
    context.translate(-750, -200);

    
    //左下
    context.translate(250, 600);

    context.beginPath();
    context.arc(0, 0, 150, 0, 2*Math.PI, true);
    context.stroke();
    context.translate(-250, -600);


    //右下
    context.translate(750, 600);

    context.beginPath();
    context.arc(0, 0, 150, 0, 1.6*Math.PI, false);
    context.stroke();
    context.translate(-750, -600);

}

window.addEventListener('load', doFirst)
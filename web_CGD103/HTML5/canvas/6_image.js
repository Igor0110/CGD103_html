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
    let pic = new Image()   //物件導向寫法 要用New
    pic.src = '../../images/cityscape.jpg'
    pic.addEventListener('load',function(){
        context.drawImage(pic, 100, 100, canvas.width,canvas.height);

    })

    


    // let n = 5;
    // let n = new Number(5);   //constructor 建構子 也稱建構函數 (有小括號 是函數)，功能「給初值」
    // let n = new Number();
    // ---------------------
    // // 給初值的方法  因為JQ沒有字串的概念，單引號雙引號都可以
    // let str = 'ABC';
    // let str = new String('ABC');
    // let str = new String();  //空字串
    // -----------------------
    // let arr = [2,4,6,'ABC',true,new Data()]
    // let arr = new Array(2,4,6,'ABC',true,new Data());
    // let arr = new Array();   //[]

    
    // --------------------------------------------
    // let ans = true;
    // let ans = new Boolean(true);
    // let ans = new Boolean();  //false


    // let obj = {};
    // --------------------------------------------
    // // 錯誤寫法let today = '2022/10/21'   //字串 錯誤寫法
    // let today = new Data('2022/10/21')   //日期時間物件


}
window.addEventListener('load',doFirst)
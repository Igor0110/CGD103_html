function doFirst(){

    navigator.geolocation.getCurrentPosition(succCallback,errorCallback,{
        enableHighAccuracy:false,
        maximumAge:0,
    })
    
    
}
function succCallback(e){
    let accuracy =e.coords.accuracy

    if(accuracy > 1000){
        document.getElementById('position').innerHTML =`超過偵測範圍`
    }else{
        document.getElementById('position').innerHTML=`
            緯度：${e.coords.latitude} <br>
            經度：${e.coords.longitude} <br>
            精準度：${e.coords.accuracy}  公尺
        `

    }

}
function errorCallback(e){
    document.getElementById('position').innerHTML=`
        錯誤碼：${e.code} <br>
        錯誤訊息：${e.message} 
    `
}
window.addEventListener('load',doFirst)

// 緯度：24.9455721
// 經度：121.2271666
// 精準度：12967.416397510708 公尺
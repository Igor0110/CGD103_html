function doFirst(){
//先跟畫面產生關連
    
    myMovie = document.getElementById('myMovie')
    playButton =document.getElementById('playButton')
    defaultBar = document.getElementById('defaultBar')
    progress = document.getElementById('progress')

    // alert(defaultBar.style.width)無法直接從js取得css
    barsize = parseInt(window.getComputedStyle(defaultBar).width)
    // alert(barsize)

    
    //再建是建聆聽功能
    playButton.addEventListener('click',playOurPause)
    defaultBar.addEventListener('click',clickedBar)

    //全螢幕
    // fullButton.addEventListener('click',function(){
    //     myMovie.webkitEnterFullScreen()
    // })
}
function playOurPause(){
    if(!myMovie.paused && !myMovie.ended){  //影片正在跑
        myMovie.pause()
        playButton.innerText = 'play'
    }else{
        myMovie.play()
        playButton.innerText = 'pause'
        setInterval(update, 300) //更新轉軸
    }
}

function update(){
    if(!myMovie.ended){
        let size = barsize / myMovie.duration * myMovie.currentTime
        progress.style.width = `${size}px`
    }else{
        playButton.innerText = 'play'
        progress.style.width = '0px'
        myMovie.currentTime = 0
    }

}
function clickedBar(e){
    let mouseX = e.clientX -defaultBar.offsetLeft
    progress.style.width =  `${mouseX}px`

    let newTime = mouseX ;
    // myMovie.currentTime = newTime

window.addEventListener('load',doFirst) 
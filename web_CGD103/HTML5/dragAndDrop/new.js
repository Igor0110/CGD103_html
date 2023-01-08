function doFirst(){
//先跟HTML畫面產生關聯，再建是建聆聽功能

    image = document.getElementById('image')   
    image.addEventListener('dragstart',starDrag)   //拖曳開始
    image.addEventListener('dragend',endDrag)    //拖曳結束

    // console.log(image)

    rightbox = document.getElementById('rightbox')
    // rightbox.addEventListener('dragenter',function(e){e.preventDefault()})     //拖進該範圍
    rightbox.addEventListener('dragover',function(e){e.preventDefault()})    //停在裡面
    rightbox.addEventListener('drop',dropped)    //放下

}
function starDrag(e){
    // let data =  `<img src="../../images/Shinnosuke/Shinnosuke3.png" alt="copy新之助" >`
    let data = `<img src="${image.src}" alt="${image.alt}">`
    // e.dataTransfer.setData('image/png',data) 不要寫型態，而是用名詞
    e.dataTransfer.setData('Shinnosuke',data)


}
function endDrag(){
    image.style.visibility = 'hidden'
}
function dropped(e){
    e.preventDefault()
    rightbox.innerHTML = e.dataTransfer.getData('Shinnosuke')


}
window.addEventListener('load',doFirst)
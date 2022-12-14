function doFirst(){    
    // 先跟 HTML 畫面產生關連，再建事件聆聽功能
    document.getElementById('dropzone').ondragover = dragOver
    document.getElementById('dropzone').ondrop = dropped
}
function dragOver(e){
    // console.log(e);
    e.preventDefault()
}
function dropped(e){
    e.preventDefault()

    let file = e.dataTransfer.files[0]
    fileName.innerText = file.name
    
    let readFile = new FileReader()
    readFile.readAsDataURL(file)
    readFile.addEventListener('load',function(){
        let myMovie = document.getElementById('myMovie')
        myMovie.src = readFile.result
        myMovie.controls = true
    })
}
window.addEventListener('load',doFirst)
function doFirst(){
//先跟HTML畫面產生關聯，再建是建聆聽功能
    document.getElementById('dropzone').ondragover = dragOver
    document.getElementById('dropzone').ondrop = dropped
}

function dragOver(e){
    e.preventDefault();
   
}
function dropped(e){
    e.preventDefault();
    let file = e.dataTransfer.files[0]
    fileName.innerText = file.name

    let readFile = new FileReader()
    readFile.readAsText(file)
    readFile.addEventListener('load',function(){
        fileContent.value = readFile.result
    })
}


window.addEventListener('load',doFirst)
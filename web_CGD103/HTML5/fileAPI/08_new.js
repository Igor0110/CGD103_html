function doFirst(){
//先跟HTML畫面產生關聯，再建是建聆聽功能
 
    document.getElementById('theFile').onchange = fileChange
}

function fileChange(){
    let file = document.getElementById('theFile').files[0]
    // console.log(file);

    let message =  ``
    message += `File name: ${file.name}\n`
    message += `File type: ${file.type}\n`
    message += `File type: ${file.type}\n`
    message += `File size: ${file.size} byte\n`
    message += `Last modified: ${file.lastModifieData}\n`
    fileInfo.value = message
    // ======
    let readFile = new FileReader()
    readFile.readAsDataURL(file)
    readFile.addEventListener('load',function(){
        let myMovie = document.getElementById('myMovie')
        myMovie.src = readFile.result
        myMovie.width = 535
        myMovie.controls = true

    })
    

}
window.addEventListener('load',doFirst)
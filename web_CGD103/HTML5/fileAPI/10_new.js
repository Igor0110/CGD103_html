function doFirst(){
//先跟HTML畫面產生關聯，再建是建聆聽功能
 
    document.getElementById('theFile').onchange = fileChange
}

function fileChange(){
    let file = document.getElementById('theFile').files

    let message =  ``

    for(let i = 0;i < file.length; i++){
        message += `File name: ${file[i].name}\n`
        message += `File type: ${file[i].type}\n`
        message += `File size: ${file[i].size} byte\n`
        message += `Last modified: ${file[i].lastModifieData}\n`
        message += `-----------------------------------------\n`

    }

    fileInfo.value = message
}
window.addEventListener('load',doFirst)
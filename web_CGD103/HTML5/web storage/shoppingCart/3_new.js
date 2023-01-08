let storage = localStorage;
function doFirst(){
    if(storage['addItemList'] == null){
        //建立紀錄順序的空字串 ''
        storage['addItemList'] = '' 
        // 也可以 storage.setItem('addItemList','') 
    //幫每個 add cart 建立事件聆聽
    }



    let list = document.querySelectorAll('.addButton')  //list是陣列
    for(let i = 0; i<list.length ; i++){
        list[i].addEventListener('click',function(e){
            let teddyInfo = document.querySelector(`#${e.target.id} input`).value

            // alert(teddyInfo)
            addItem(e.target.id, teddyInfo)
        })
        // list[i].addEventListener('click',(e) => alert(this.id))
    }
}
function addItem(itemId, itemValue){
    // alert(`${itemId} :${itemValue}`)
    let image = document.createElement('img')
    image.src = 'imgs/' + itemValue.split('|')[1]

    let title = document.createElement('span')
    title.innerText = itemValue.split('|')[0]

    let price = document.createElement('span')
    price.innerText=  itemValue.split('|')[2]


    // let newItem = document.getElementById('newItem')


    //先判斷 此處是否已有霧建，如果有要先刪除
    // alert(newItem.childNodes.length)
    if(newItem.hasChildNodes()){
        while(newItem.childNodes.length >= 1){
            newItem.removeChild(newItem.firstChild)
        }
    }
    

    //在顯示新物件
    newItem.appendChild(image)
    newItem.appendChild(title)
    newItem.appendChild(price)

    //存入 storage
    if(storage[itemId]){
        alert('YOU have checked.')
    }else{
        storage['addItemList'] += `${itemId}, `
        storage.setItem(itemId, itemValue)
    }

    //計算購買數量跟小計
    let itemString = storage['addItemList'] 
    let items = itemString.substr(0, itemString.length - 2).split(', ')// let itemString = storage.getItem('addItemList')
   // console.log(items)   // ['A1001', 'A1005', 'A1006', 'A1002']
    // let itemString = storage.getItem('addItemList')

    // subtotal = 0
    // for (let i = 0 ; i <items.length ;i++){
    //     let itemInfo  =storage.getItem(item[i])
    //     let itemPrice = parseInt(itemInfo.split('|')[2])
    //     subtotal += itemPrice
    //     console.log(subtotal)
    
    // } 
    subtotal = 0
    for(let i = 0; i < items.length; i++){
        let itemInfo = storage.getItem(items[i])
        let itemPrice = parseInt(itemInfo.split('|')[2])
        subtotal += itemPrice
    }
    document.getElementById('itemCount').innerText = items.length
    document.getElementById('subtotal').innerText = subtotal



}
window.addEventListener('load', doFirst);
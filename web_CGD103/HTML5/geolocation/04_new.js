function doFirst(){
    let area = document.getElementById('map')
    let position = new google.maps.LatLng(24.9576003 ,121.2250866)
    let options = {
        zoom: 14,
        center:position,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
    }
    let map = new google.maps.Map(area,options)
    let Marker = new google.maps.Marker({
        position, // position: position,
        map,// map : map,
        title: '這是哪裡?',// title:,
        icon: '../../images/foot.gif',// icon:,
    })

    

}

window.addEventListener('load',doFirst)

// 緯度：24.9576003
// 經度：121.2250866
// 精準度：14.368 公尺
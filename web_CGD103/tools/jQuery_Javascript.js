JavaScript     jQuery
-----------------------------------
innerHTML       $().html()
innerText       let ans = $().text()  //getter
                $().text('Does it make sense?')  //setter


setter and  getter(有傳回值)
img物件.setAttribute('width'.300)


------------------------------------------------------------
HTML 標籤本身的屬性
物件.屬性                $().attr('屬性','屬性值')  //setter
img物件.src              let ans = $().attr('屬性')  //getter
input物件.value
某物件.id
某物件.className
label物件.htmlFOr
------------------------------------------------------------
CSS 的屬性
物件.style.css屬性        $().css('屬性','屬性值')
某物件.style.color
某物件.style.fontSize

------------------------------------------------------------

setter and getter 
ing物件.setAttribute('width', 300)
let ans = img物件.getAttribute('width')
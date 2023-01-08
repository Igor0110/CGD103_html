1. IE 不支援 Vue3 (因為 Vue3 改用 ES6 的 proxy)
2. 相異之處: 搭配的版本不同
   vue@2 -- vue-router@3 -- vuex@3
   vue@3 -- vue-router@4 -- vuex@4

3. Composition API 的優點
   減少了 this 的使用，因為 this 有指向的問題
   有更好的封裝邏輯
   清楚的追蹤資料來源
   劃分哪些資料需要被 Vue 追蹤，那些不要

4. 前端工程師面試問題集
    https://h5bp.org/Front-end-Developer-Interview-Questions/translations/chinese-traditional/

    this 是甚麼
    closure 閉包

    如何呼叫後端的 API，同步和非同步的差別
    說明 Vue 如何做非同步?
    Vue 如何呼叫 API
    何謂 Vue CLI?
    使用 CLI 下過甚麼指令?

5. AJAX
    JavaScript: XMLHttpRequest 物件
    jQuery: $.ajax()
    plugin: Axios.js
    ES6: Promise 物件的 then()
    ES6: FetchAPI
    ES6 以後: async, Await, ...
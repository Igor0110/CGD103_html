$(function () {
    let divwidth = $('#sliderBoard').width()
    let imgCount = $('#content li').length

    // alert(imgCount)
    for(let i = 0; i < imgCount ;i++){
        $('#contentButton').append(`<li></li>`)
    }
    $('#contentButton li:nth-child(1)').addClass('clicked')
    
    // li的寬
    $('#content li').width(divwidth)

    // ul的寬  (li的寬 成以個數)
    $('#content').width(divwidth * imgCount)

// =================
    let index = 0;
    let timer = setInterval(moveToTheNext,5000)
    //timer = setInterval(函數,毫秒)
    

    $('#contentButton li').click(function(){
        clearInterval(timer)
        // alert($(this).index())
        index = $(this).index()

        $('#content').animate({
            left:divwidth * index * -1,
        })

        $(this).addClass('clicked')

        $('#contentButton li').not(this).removeClass('clicked')

        timer = setInterval(moveToTheNext,5000)

    })


    function moveToTheNext(){
        if(index <imgCount -1 ){
            index++
        }else{
            index= 0
        }

        $('#content').animate({
            left: divwidth * index * -1,
        })
        $(`#contentButton li:eq(${index})`).addClass('clicked')
        $(`#contentButton li`).not(`:eq(${index})`).removeClass('clicked')

    }
}); 
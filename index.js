
$(document).ready(function () {
    $('#main_start_button').on('click', function () {
        changeLevel('plus')
    })
    
    $('.button_question__3qegS').on('click', function () {

        changeLevel('plus')
    })
})


function changeLevel(action){
    let cur = parseInt($('.button_question__3qegS').attr('level-attr'));
    
    if (action == 'plus') {
        cur +=1

    } else {
        cur -=1
    }
    $('.button_question__3qegS').attr('level-attr', cur)
    let levels = [0, 1, 2, 3, 4, 5]
    let progress_width = [
        {1: '20'},
        {2: '40'},
        {3: '60'},
        {4: '80'},
        {5: '99'}

    ]
    for (level in levels) {

        if (cur !== parseInt(level)) {
            $('.level_' + level).css('display', 'none')
        }
    }
    $('.level_' + cur).css('display', 'block')
    if(cur > 0){

        $('.progress_progress__1tdns, .doctor_default__gPK7b, .button-back_default__3LWlO, .app-container_default__1vu2knext').css('display', 'block')
        $('.question-container_buttonContainer__3i558').css('display', 'block')
        $('.button_question__3qegS').css('display', 'block')
    }
    if(cur == 5){
        $(' .button-back_default__3LWlO, .app-container_default__1vu2knext').css('display', 'none')
        $('.button_question__3qegS').css('display', 'none')
    }

}
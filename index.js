
$(document).ready(function () {

    $('input[name=phone]').attr("placeholder", 'Ваш телефон');
    $('#main_start_button').on('click', function () {
        changeLevel('plus')
    })

    $('.button-back_default__3LWlO').on('click', function () {
        changeLevel('minus')
    })
    
    $('.button_question__3qegS').on('click', function () {
        changeLevel('plus')
    })

    $('.answer_small__2SKUB, .answer_large__2OoMk').on('click', function () {
        if($(this).closest('.level').attr('id').slice(-1) == parseInt($('.button_question__3qegS').attr('level-attr'))){
            $(this).closest('.question_answersContainer__20Aez').find('input').each(function(){$(this).attr('checked',false)})
            $(this).closest('.question_answersContainer__20Aez').find('.answer_small__2SKUB').each(function(){$(this).removeClass('answer_checked__2bg92')})
            $(this).closest('.question_answersContainer__20Aez').find('.checkbox_plain__1lZjG').each(function(){$(this).removeClass('checkbox_checked__193bi')})
        }
        $('.error-message_default__19Cke').removeClass('error-message_active__130GH')  
        $(this).find('input').attr('checked','checked')
        $(this).addClass('answer_checked__2bg92')
        $(this).find('.checkbox_plain__1lZjG').addClass('checkbox_checked__193bi')
        
    })
    $('.answer_card__1NzG8').on('click', function () {
        if($(this).closest('.level').attr('id').slice(-1) == parseInt($('.button_question__3qegS').attr('level-attr'))){
            $(this).closest('.question_answersContainer__20Aez').find('input').each(function(){$(this).attr('checked',false)})
            $(this).closest('.question_answersContainer__20Aez').find('.answer_small__2SKUB').each(function(){$(this).removeClass('answer_checked__2bg92')})
            $(this).closest('.question_answersContainer__20Aez').find('.checkbox_plain__1lZjG').each(function(){$(this).removeClass('checkbox_checked__193bi')})
        }
        $('.error-message_default__19Cke').removeClass('error-message_active__130GH')  
        $(this).find('input').attr('checked','checked')
        $(this).addClass('answer_checked__2bg92')
        $(this).find('.checkbox_card__2Kw-u').addClass('checkbox_checked__193bi')
        
    })
    $('.answer_large__2OoMk').on('click', function () {
        if($(this).closest('.level').attr('id').slice(-1) == parseInt($('.button_question__3qegS').attr('level-attr'))){
            $(this).closest('.question_answersContainer__20Aez').find('input').each(function(){$(this).attr('checked',false)})
            $(this).closest('.question_answersContainer__20Aez').find('.answer_small__2SKUB').each(function(){$(this).removeClass('answer_checked__2bg92')})
            $(this).closest('.question_answersContainer__20Aez').find('.checkbox_plain__1lZjG').each(function(){$(this).removeClass('checkbox_checked__193bi')})
        }
        $('.error-message_default__19Cke').removeClass('error-message_active__130GH')  
        $(this).find('input').attr('checked','checked')
        $(this).addClass('answer_checked__2bg92')
        $(this).find('.checkbox_detail__I8wvs').addClass('checkbox_checked__193bi')
        $(this).find('.checkbox_plain__1lZjG').addClass('checkbox_checked__193bi')
        
    })

})


function changeLevel(action){
    let cur = parseInt($('.button_question__3qegS').attr('level-attr'));
    // $('.question_header__1hHV9').toggleClass('flip-in-up')
    // $('.question_header__1hHV9').toggleClass('flip-in-up')

    
    if (action == 'plus') {
        let count = 0
        if(cur !== 0){
        $('#level_'+cur).find('input').each(function(){
            if($(this).attr('checked') == 'checked'){
                count++
            }
        })
        console.log(count)
        if(count == 0){
            $('.error-message_default__19Cke').addClass('error-message_active__130GH').html('Пожалуйста, выберите один из вариантов')
            return false
        }else{
            $('.error-message_default__19Cke').removeClass('error-message_active__130GH')  
        }
    }

        cur +=1

    } else {
        cur -=1
    }
    $('.button_question__3qegS').attr('level-attr', cur)
    let levels = [0, 1, 2, 3, 4, 5]
    let progress_width = [0,20,40,60,80,99]
    let progress_value = progress_width[cur]+'%'
    $('.progress_track__2a78r').css('width', progress_value)
    $('.progress_header__27NOl').html(progress_value)
    for (level in levels) {

        if (cur !== parseInt(level)) {
            $('#level_' + level).css('display', 'none')
        }
    }
    $('#level_' + cur).css('display', 'block')
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
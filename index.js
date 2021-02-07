$(document).ready(function () {
    let now = new Date();
    let cur_hour = now.getHours()
    let count_test = cur_hour +7
    $('.visits_visits__29XEU').find('b').html(count_test)
    $('#flying').on('click', function () {
        $('#main_start_button').trigger('click')
    })

    $('#main_start_button').on('click', function () {
        changeLevel('plus')
    })

    $('.button-back_default__3LWlO').on('click', function () {
        
        if($('#level_7').css('display') === 'none'){
        changeLevel('minus')
                }else{
            $('#level_0').css('display', 'block')
            $('#level_7').css('display', 'none') 

        }
        if($('#level_0').css('display') == 'block' || $('#level_7').css('display') == 'block'){
            
            $('.doctor_default__gPK7b, .button_question__3qegS').css('display', 'none')
            }else{
                
                $('.doctor_default__gPK7b, .button_question__3qegS').css('display', 'block')
             }
    })
    
    $('.button_question__3qegS').on('click', function () {
       changeLevel('plus')
    })    
    $('.callback-button_default__j8f_i').on('click', function () {
       $('#level_0').css('display', 'none')
       $('#level_7').css('display', 'block')
       $('.button-back_default__3LWlO').css('display', 'block')
       if($('#level_0').css('display') == 'block' || $('#level_7').css('display') == 'block'){
        $('.doctor_default__gPK7b').css('display', 'none')
        }else{
            $('.doctor_default__gPK7b').css('display', 'block')
         }
      
    

    })    
    


    $('.answer_small__2SKUB').on('click', function () {
        $('.answer_small__2SKUB').unbind()
        if($(this).closest('.level').attr('id').slice(-1) == parseInt($('.button_question__3qegS').attr('level-attr'))){
            $(this).closest('.question_answersContainer__20Aez').find('input').each(function(){$(this).attr('checked',false)})
            $(this).closest('.question_answersContainer__20Aez').find('.answer_small__2SKUB').each(function(){$(this).removeClass('answer_checked__2bg92')})
            $(this).closest('.question_answersContainer__20Aez').find('.checkbox_plain__1lZjG').each(function(){$(this).removeClass('checkbox_checked__193bi')})
            $(this).closest('.question_answersContainer__20Aez').find('.checkbox_detail__I8wvs').each(function(){$(this).removeClass('checkbox_checked__193bi')})
        }
        $('.error-message_default__19Cke').removeClass('error-message_active__130GH')  
        $(this).find('input').attr('checked','checked')
        $(this).addClass('answer_checked__2bg92')
        $(this).find('.checkbox_plain__1lZjG').addClass('checkbox_checked__193bi')
        $(this).append('<style>.checkbox_checked__193bi:before{transform:rotate(-45deg) scale(1)}</style>')

        setTimeout(()=>{$('.button_question__3qegS').trigger('click')},1000)
    })
    $('.answer_card__1NzG8').on('click', function () {
        $('.answer_card__1NzG8').unbind()
        if($(this).closest('.level').attr('id').slice(-1) == parseInt($('.button_question__3qegS').attr('level-attr'))){
            $(this).closest('.question_answersContainer__20Aez').find('input').each(function(){$(this).attr('checked',false)})
            $(this).closest('.question_answersContainer__20Aez').find('.answer_small__2SKUB').each(function(){$(this).removeClass('answer_checked__2bg92')})
            $(this).closest('.question_answersContainer__20Aez').find('.checkbox_plain__1lZjG').each(function(){$(this).removeClass('checkbox_checked__193bi')})
            $(this).closest('.question_answersContainer__20Aez').find('.checkbox_card__2Kw-u').each(function(){$(this).removeClass('checkbox_checked__193bi')})
        }
        $('.error-message_default__19Cke').removeClass('error-message_active__130GH')  
        $(this).find('input').attr('checked','checked')
        $(this).addClass('answer_checked__2bg92')
        $(this).find('.checkbox_card__2Kw-u').addClass('checkbox_checked__193bi')
        $(this).append('<style>.checkbox_checked__193bi:before{transform:rotate(-45deg) scale(1)}</style>')
        setTimeout(()=>{$('.button_question__3qegS').trigger('click')},1000)
        
    })
    $('.answer_large__2OoMk0').on('click', function () {
        $('.answer_large__2OoMk0').unbind()
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
        $(this).append('<style>.checkbox_checked__193bi:before{transform:rotate(-45deg) scale(1)}</style>')
        setTimeout(()=>{$('.button_question__3qegS').trigger('click')},1000)
        
        
    })
    $('.answer_large__2OoMk1').on('click', function () {
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
        $(this).append('<style>.checkbox_checked__193bi:before{transform:rotate(-45deg) scale(1)}</style>')
        setTimeout(()=>{$('.button_question__3qegS').trigger('click')},1000)
        $('.answer_large__2OoMk1').unbind()
        
    })
    $('.answer_large__2OoMk-1').on('click', function () {
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
        $(this).append('<style>.checkbox_checked__193bi:before{transform:rotate(-45deg) scale(1)}</style>')
        setTimeout(()=>{$('.button_question__3qegS').trigger('click')},1000)
        $('.answer_large__2OoMk-1').unbind()
        
    })

    $('input[name="phone"]').mask("+7(999) 999-99-99")


    $('#test_submit').on('click', function(){
        if($('#test_phone').val() !== ''){
        let results = []
        $('input:not(#test_phone)').each(function(){
            if($(this).attr('checked') == 'checked' && $(this).attr('id') !== 'test_phone'){

                let question_answer = $(this).closest('section').find('article').find('h3').html()
                let question_answer_replaced
                if(question_answer !== undefined){
                question_answer_replaced = question_answer.replace('<h3>', '').replace('</h3>', '').replace('<p>', '').replace('</p>', '')
                }else{
                    question_answer_replaced  = '' 
                }
                let question_header = $(this).closest('.question_question__35CQU').find('.question_header__1hHV9').html()
                results.push( question_header + ' : '+ question_answer_replaced) 

            }
            
        })
        results.pop()
        results.pop()
        results.push('Телефон: ' + $('#test_phone').val())
        let message = JSON.stringify(results)
        $.ajax({
            url: 'send.php',
            method: 'POST',
            data: {message: message, subject: 'Вам пришла заявка на расчет'},
            success: function(){
                showTestThanks()
            }
        })
    }else{
        $('.error-message_default__19Cke').addClass('error-message_active__130GH').html('Введите номер телефона')
        return false
        }
    })

    $('#order_submit').on('click', function(){
        if($('#order_phone').val() !== ''){
            let message = 'Телефон: ' + $('#order_phone').val()
            $.ajax({
                url: 'send.php',
                method: 'POST',
                data: {message: message, subject: 'Вам пришла заявка на запись на прием'},
                success: function(){
                    console.log('success')
                    showOrderThanks()
                }
            })
        }else{
            $('.error-message_default__19Cke').addClass('error-message_active__130GH').html('Введите номер телефона')
        return false
        }
            
    })

})

function showOrderThanks(){
    $('#level_0,#level_1,#level_2,#level_3,#level_4,#level_5,#level_7, #level_9').css('display', 'none')
    $('.button-back_default__3LWlO').css('display', 'none')
    $('#level_8').css('display', 'block')
}
function showTestThanks(){
    $('#level_0,#level_1,#level_2,#level_3,#level_4,#level_5,#level_7, #level_8').css('display', 'none')
    $('.button-back_default__3LWlO').css('display', 'none')
    $('#level_9').css('display', 'block')
}

function changeLevel(action){
    let cur = parseInt($('.button_question__3qegS').attr('level-attr'));

    
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
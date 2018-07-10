// Loli moves around grid and stops at limits
$(document).ready(function(){
let leftOrRight = 0;
let upOrDown = 0;
$('body').keydown(event => {
    // console.log(event.key)

        if(event.key === 'ArrowRight'){
            if (leftOrRight < 440){
                leftOrRight += 20;
            }
            $('#loli').css('left', leftOrRight)
            if ($('#blackberry').css('left') === $('#loli').css('left') && $('#blackberry').css('top') === $('#loli').css('top')){
                $('#blackberry').hide()
            }
            console.log($('#blackberry').css('left'))
        }
     
        if(event.key === 'ArrowLeft'){
            if (leftOrRight > 0){
                leftOrRight -= 20;
            }
            $('#loli').css('left', leftOrRight)
            if ($('#blackberry').css('left') === $('#loli').css('left') && $('#blackberry').css('top') === $('#loli').css('top')){
                $('#blackberry').hide()
            }
        }

        if(event.key === 'ArrowDown'){
            if (upOrDown < 440){
                upOrDown += 20;
            }
            $('#loli').css('top', upOrDown)
            if ($('#blackberry').css('left') === $('#loli').css('left') && $('#blackberry').css('top') === $('#loli').css('top')){
                $('#blackberry').hide()
            }
        }

        if(event.key === 'ArrowUp'){
            if (upOrDown > 0){
                upOrDown -= 20;
            }
            $('#loli').css('top', upOrDown)
            if ($('#blackberry').css('left') === $('#loli').css('left') && $('#blackberry').css('top') === $('#loli').css('top')){
                $('#blackberry').hide()
            }
        }
});
});

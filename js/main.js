// Loli moves around grid and stops at limits
$(document).ready(function(){
let leftOrRight = 0;
let upOrDown = 0;
    $('body').keydown(event => {

        if(event.key === 'ArrowRight'){
            if (leftOrRight < 440){
                leftOrRight += 20;
            }
            // berry "disappears" if loli's left/top equal to berry's left/top
            $('#loli').css('left', leftOrRight)
            if ($('#blackberry').css('left') === $('#loli').css('left') && $('#blackberry').css('top') === $('#loli').css('top')){
                $('#blackberry').hide()
            }
            if ($('#blueberry').css('left') === $('#loli').css('left') && $('#blueberry').css('top') === $('#loli').css('top')){
                $('#blueberry').hide()
            }
            if ($('#cloudberry').css('left') === $('#loli').css('left') && $('#cloudberry').css('top') === $('#loli').css('top')){
                $('#cloudberry').hide()
            }
            if ($('#cranberry').css('left') === $('#loli').css('left') && $('#cranberry').css('top') === $('#loli').css('top')){
                $('#cranberry').hide()
            }
            if ($('#raspberry').css('left') === $('#loli').css('left') && $('#raspberry').css('top') === $('#loli').css('top')){
                $('#raspberry').hide()
            }
            if ($('#strawberry').css('left') === $('#loli').css('left') && $('#strawberry').css('top') === $('#loli').css('top')){
                $('#strawberry').hide()
            }
        }
     
        if(event.key === 'ArrowLeft'){
            if (leftOrRight > 0){
                leftOrRight -= 20;
            }
            // berry "disappears" if loli's left/top equal to berry's left/top
            $('#loli').css('left', leftOrRight)
            if ($('#blackberry').css('left') === $('#loli').css('left') && $('#blackberry').css('top') === $('#loli').css('top')){
                $('#blackberry').hide()
            }
            if ($('#blueberry').css('left') === $('#loli').css('left') && $('#blueberry').css('top') === $('#loli').css('top')){
                $('#blueberry').hide()
            }
            if ($('#cloudberry').css('left') === $('#loli').css('left') && $('#cloudberry').css('top') === $('#loli').css('top')){
                $('#cloudberry').hide()
            }
            if ($('#cranberry').css('left') === $('#loli').css('left') && $('#cranberry').css('top') === $('#loli').css('top')){
                $('#cranberry').hide()
            }
            if ($('#raspberry').css('left') === $('#loli').css('left') && $('#raspberry').css('top') === $('#loli').css('top')){
                $('#raspberry').hide()
            }
            if ($('#strawberry').css('left') === $('#loli').css('left') && $('#strawberry').css('top') === $('#loli').css('top')){
                $('#strawberry').hide()
            }
        }

        if(event.key === 'ArrowDown'){
            if (upOrDown < 440){
                upOrDown += 20;
            }
            // berry "disappears" if loli's left/top equal to berry's left/top
            $('#loli').css('top', upOrDown)
            if ($('#blackberry').css('left') === $('#loli').css('left') && $('#blackberry').css('top') === $('#loli').css('top')){
                $('#blackberry').hide()
            }
            if ($('#blueberry').css('left') === $('#loli').css('left') && $('#blueberry').css('top') === $('#loli').css('top')){
                $('#blueberry').hide()
            }
            if ($('#cloudberry').css('left') === $('#loli').css('left') && $('#cloudberry').css('top') === $('#loli').css('top')){
                $('#cloudberry').hide()
            }
            if ($('#cranberry').css('left') === $('#loli').css('left') && $('#cranberry').css('top') === $('#loli').css('top')){
                $('#cranberry').hide()
            }
            if ($('#raspberry').css('left') === $('#loli').css('left') && $('#raspberry').css('top') === $('#loli').css('top')){
                $('#raspberry').hide()
            }
            if ($('#strawberry').css('left') === $('#loli').css('left') && $('#strawberry').css('top') === $('#loli').css('top')){
                $('#strawberry').hide()
            }
        }

        if(event.key === 'ArrowUp'){
            if (upOrDown > 0){
                upOrDown -= 20;
            }
            // berry "disappears" if loli's left/top equal to berry's left/top
            $('#loli').css('top', upOrDown)
            if ($('#blackberry').css('left') === $('#loli').css('left') && $('#blackberry').css('top') === $('#loli').css('top')){
                $('#blackberry').hide()
            }
            if ($('#blueberry').css('left') === $('#loli').css('left') && $('#blueberry').css('top') === $('#loli').css('top')){
                $('#blueberry').hide()
            }
            if ($('#cloudberry').css('left') === $('#loli').css('left') && $('#cloudberry').css('top') === $('#loli').css('top')){
                $('#cloudberry').hide()
            }
            if ($('#cranberry').css('left') === $('#loli').css('left') && $('#cranberry').css('top') === $('#loli').css('top')){
                $('#cranberry').hide()
            }
            if ($('#raspberry').css('left') === $('#loli').css('left') && $('#raspberry').css('top') === $('#loli').css('top')){
                $('#raspberry').hide()
            }
            if ($('#strawberry').css('left') === $('#loli').css('left') && $('#strawberry').css('top') === $('#loli').css('top')){
                $('#strawberry').hide()
            }
        }
    });
    setInterval(() => {
            alert("Are you finished? Yes = Winner; No = [Refresh] Try Again.")
        }, 20000);
});

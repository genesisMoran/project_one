// Berries appear randomly on grid
$(document).ready(function(){
    $('#blackberry').css('left', Math.floor((Math.random() * 420) + 60));
    $('#blackberry').css('top', Math.floor((Math.random() * 420) + 60));

    $('#blueberry').css('left', Math.floor((Math.random() * 420) + 60));
    $('#blueberry').css('top', Math.floor((Math.random() * 420) + 60));

    $('#cloudberry').css('left', Math.floor((Math.random() * 420) + 60));
    $('#cloudberry').css('top', Math.floor((Math.random() * 420) + 60));

    $('#cranberry').css('left', Math.floor((Math.random() * 420) + 60));
    $('#cranberry').css('top', Math.floor((Math.random() * 420) + 60));

    $('#raspberry').css('left', Math.floor((Math.random() * 420) + 60));
    $('#raspberry').css('top', Math.floor((Math.random() * 420) + 60));

    $('#strawberry').css('left', Math.floor((Math.random() * 420) + 60));
    $('#strawberry').css('top', Math.floor((Math.random() * 420) + 60));
});

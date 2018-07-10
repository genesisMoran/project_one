// Berries appear randomly on grid
$(document).ready(function(){
    let randomLeft = Math.floor((Math.random() * 400) + 60);
    let randomTop = Math.floor((Math.random() * 400) + 60);

    // BLACKBERRY LEFT
    while (randomLeft % 20 != 0) {
        randomLeft = Math.floor((Math.random() * 400) + 60);
    }
    $('#blackberry').css('left', randomLeft)
    // BLACKBERRY TOP
    while (randomTop % 20 != 0) {
        randomTop = Math.floor((Math.random() * 400) + 60);
    }
    $('#blackberry').css('top', randomTop)

    // BLUEBERRY 

    // $('#blueberry').css('left', Math.floor((Math.random() * 420) + 60));
    // $('#blueberry').css('top', Math.floor((Math.random() * 420) + 60));

    // $('#cloudberry').css('left', Math.floor((Math.random() * 420) + 60));
    // $('#cloudberry').css('top', Math.floor((Math.random() * 420) + 60));

    // $('#cranberry').css('left', Math.floor((Math.random() * 420) + 60));
    // $('#cranberry').css('top', Math.floor((Math.random() * 420) + 60));

    // $('#raspberry').css('left', Math.floor((Math.random() * 420) + 60));
    // $('#raspberry').css('top', Math.floor((Math.random() * 420) + 60));

    // $('#strawberry').css('left', Math.floor((Math.random() * 420) + 60));
    // $('#strawberry').css('top', Math.floor((Math.random() * 420) + 60));

    // console.log("here's your strawberry:", $('#strawberry').css('top'));
});


// Berries appear randomly on grid
$(document).ready(function(){
    // BLACKBERRY
    let randomLeft1 = Math.floor((Math.random() * 380) + 60);
    let randomTop1 = Math.floor((Math.random() * 380) + 60);
    // BLUEBERRY
    let randomLeft2 = Math.floor((Math.random() * 380) + 60);
    let randomTop2 = Math.floor((Math.random() * 380) + 60);
    // CLOUDBERRY
    let randomLeft3 = Math.floor((Math.random() * 380) + 60);
    let randomTop3 = Math.floor((Math.random() * 380) + 60);
    // CRANBERRY
    let randomLeft4 = Math.floor((Math.random() * 380) + 60);
    let randomTop4 = Math.floor((Math.random() * 380) + 60);
    // RASPBERRY
    let randomLeft5 = Math.floor((Math.random() * 380) + 60);
    let randomTop5 = Math.floor((Math.random() * 380) + 60);
    // STRAWBERRY
    let randomLeft6 = Math.floor((Math.random() * 380) + 60);
    let randomTop6 = Math.floor((Math.random() * 380) + 60);

    // BLACKBERRY LEFT
    while (randomLeft1 % 20 != 0) {
        randomLeft1 = Math.floor((Math.random() * 380) + 60);
    }
    $('#blackberry').css('left', randomLeft1)
    // BLACKBERRY TOP
    while (randomTop1 % 20 != 0) {
        randomTop1 = Math.floor((Math.random() * 380) + 60);
    }
    $('#blackberry').css('top', randomTop1)

    // BLUEBERRY LEFT
    while (randomLeft2 % 20 != 0) {
        randomLeft2 = Math.floor((Math.random() * 380) + 60);
    }
    $('#blueberry').css('left', randomLeft2)
    // BLUEBERRY TOP
    while (randomTop2 % 20 != 0) {
        randomTop2 = Math.floor((Math.random() * 380) + 60);
    }
    $('#blueberry').css('top', randomTop2)

    // CLOUDBERRY LEFT
    while (randomLeft3 % 20 != 0) {
        randomLeft3 = Math.floor((Math.random() * 380) + 60);
    }
    $('#cloudberry').css('left', randomLeft3)
    // CLOUDBERRY TOP
    while (randomTop3 % 20 != 0) {
        randomTop3 = Math.floor((Math.random() * 380) + 60);
    }
    $('#cloudberry').css('top', randomTop3)

    // CRANBERRY LEFT
    while (randomLeft4 % 20 != 0) {
        randomLeft4 = Math.floor((Math.random() * 380) + 60);
    }
    $('#cranberry').css('left', randomLeft4)
    // CRANBERRY TOP
    while (randomTop4 % 20 != 0) {
        randomTop4 = Math.floor((Math.random() * 380) + 60);
    }
    $('#cranberry').css('top', randomTop4)

    // RASPBERRY LEFT
    while (randomLeft5 % 20 != 0) {
        randomLeft5 = Math.floor((Math.random() * 380) + 60);
    }
    $('#raspberry').css('left', randomLeft5)
    // RASPBERRY TOP
    while (randomTop5 % 20 != 0) {
        randomTop5 = Math.floor((Math.random() * 380) + 60);
    }
    $('#raspberry').css('top', randomTop5)

    // STRAWBERRY LEFT
    while (randomLeft6 % 20 != 0) {
        randomLeft6 = Math.floor((Math.random() * 380) + 60);
    }
    $('#strawberry').css('left', randomLeft6)
    // STRAWBERRY TOP
    while (randomTop6 % 20 != 0) {
        randomTop6 = Math.floor((Math.random() * 380) + 60);
    }
    $('#strawberry').css('top', randomTop6)
});

// Loli moves around grid and stops at limits
let leftOrRight = 0;
let upOrDown = 0;
document.addEventListener('keydown', (event) => {
    // console.log(event.key)

        if(event.key === 'ArrowRight'){
            if (leftOrRight < 440){
                leftOrRight += 10;
            }
            $('#loli').css('left', leftOrRight)
            // console.log($('#loli').css('left'))
            // console.log('right',$('#loli'))
        }
     
        if(event.key === 'ArrowLeft'){
            if (leftOrRight > 0){
                leftOrRight -= 10;
            }
            $('#loli').css('left', leftOrRight)
            // console.log($('#loli').css('left'))
        }

        if(event.key === 'ArrowDown'){
            if (upOrDown < 440){
                upOrDown += 10;
            }
            $('#loli').css('top', upOrDown)
            // console.log('top',$('#loli').css('top'))
            // console.log('down',$('#loli'))
        }

        if(event.key === 'ArrowUp'){
            if (upOrDown > 0){
                upOrDown -= 10;
            }
            $('#loli').css('top', upOrDown)
            // console.log('top',$('#loli').css('top'))
        }
});

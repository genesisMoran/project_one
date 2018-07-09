// Loli moves around grid and stops at limits
let leftOrRight = 0;
let upOrDown = 0;
document.addEventListener('keydown', (event) => {
    console.log(event.key)

        if(event.key === 'ArrowRight'){
            if (leftOrRight < 440){
                leftOrRight += 20;
            }
            $('#loli').css('left', leftOrRight)
            console.log($('#loli').css('left'))
            console.log('right',$('#loli'))
        }
     
        if(event.key === 'ArrowLeft'){
            if (leftOrRight > 0){
                leftOrRight -= 20;
            }
            $('#loli').css('left', leftOrRight)
            console.log($('#loli').css('left'))
        }

        if(event.key === 'ArrowDown'){
            if (upOrDown < 440){
                upOrDown += 20;
            }
            $('#loli').css('top', upOrDown)
            console.log('top',$('#loli').css('top'))
            console.log('down',$('#loli'))
        }

        if(event.key === 'ArrowUp'){
            if (upOrDown > 0){
                upOrDown -= 20;
            }
            $('#loli').css('top', upOrDown)
            console.log('top',$('#loli').css('top'))
        }
});

// Berries appear randomly on grid
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min); // Math.ceil function returns the smallest integer greater than or equal to a given number
    max = Math.floor(max); // Math.floor function returns the largest integer less than or equal to a given number
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive 
}
const randomGridCoords = getRandomIntInclusive(10, 500)
console.log(randomGridCoords);
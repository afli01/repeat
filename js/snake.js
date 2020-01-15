let field = document.createElement('div');//create block 
document.body.appendChild(field);//add to block
field.classList.add('field');//add variable field class = "field" 

for(let i=1; i<101; i++){
    let excel = document.createElement('div');//create block "excel"*100
    field.appendChild(excel);//inside the block field add excel
    excel.classList.add('excel');//add blocks excel class "excel"
}

let excel = document.getElementsByClassName('excel');
//search all elements with class "excel"
    x     = 1,
    y     = 10;
    
for(i=0; i<excel.length;i++){
  if(x > 10){
     x = 1;
     y--;
  }
  excel[i].setAttribute("posx",x);
  excel[i].setAttribute("posy",y);
  x++;
  //add attribute x,y
}

function generateSnake() {//generate randdom dots spawn snake x 1-10/y 1-10
   let posX = Math.round(Math.random() * (10 - 3) + 3);
   let posY = Math.round(Math.random() * (10 - 1) + 1);
       return [posX, posY];
}

let coordinates = generateSnake();
    snakeBody   = [document.querySelector('[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'), 
                  //search coordinates(generateSnake) and equating to coordinates(snakeBody)
                   document.querySelector('[posX = "' + (coordinates[0] - 1 )+ '"][posY = "' + coordinates[1] + '"]'),
                   document.querySelector('[posX = "' + (coordinates[0] - 2 )+ '"][posY = "' + coordinates[1] + '"]')];
    for(i = 0; i < snakeBody.length; i++){
        snakeBody[i].classList.add('snakeBody')

    }
    
    snakeBody[0].classList.add('snakeHead');
    
    let mouse;

    function createMause(){
        function generateMouse() {//generate randdom dots spawh mouse x 1-10/y 1-10
            let posX = Math.round(Math.random() * (10 - 1) + 1);
            let posY = Math.round(Math.random() * (10 - 1) + 1);
                return [posX, posY];
         }
         
         let mouseCoordinates = generateMouse();
             mouse            = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
             mouse.classList.add('mouse');

            while(mouse.classList.contains('snakeBody','snakeHead')){
                let mouseCoordinates = generateMouse();
                    mouse            = document.querySelector('[posX = "' + mouseCoordinates[0] + '"][posY = "' + mouseCoordinates[1] + '"]');
            }

         console.log(mouse)
    }
    createMause()

    function move(){
        let snakeCoordinates = [snakeBody[0].getAttribute('posX'),snakeBody[0].getAttribute('posY')];
        snakeBody[0].classList.remove('head');
        snakeBody[snakeBody.length-1].classList.remove('snakeBody');
        snakeBody.pop();

        snakeBody.unshift(document.querySelector([posX = "' + (+ snakeCoordinates[0] +1) + '"][posY = "' + snakeCoordinates[1] + '"]));

        snakeBody[0].classList.add('head');
        for(i = 0; i < snakeBody.length; i++){
            snakeBody[i].classList.add('snakeBody');
    
        }
    }

    let intetva = setInterval(move, 3000);
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
}

function generateSnake() {
   let posX = Math.round(Math.random() * (1 - 10) + 1);
       posY = Math.round(Math.random() * (1 - 10) + 1);
       return [posX, posY];
}

let coordinates = generateSnake();
console.log(coordinates[0]);
console.log(coordinates[1]);
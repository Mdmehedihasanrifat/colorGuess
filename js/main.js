let color=genraterandomColor(6);

let colorpick=colorPick();

let h1=document.querySelector('h2');



let message=document.getElementById('message');
let displayRgB=document.getElementById("displayRgb");
displayRgB.innerText=colorpick;
let squares=document.querySelectorAll('.square');
for(let i=0 ;i< squares.length;i++){

  squares[i].style.backgroundColor=color[i];

squares[i].addEventListener("click",function () {

  let clickColor=this.style.backgroundColor;
 console.log(clickColor);
 console.log(colorpick);
  if(clickColor===colorpick){
    message.innerText="correct";
    colorChange(clickColor);
    h1.style.backgroundColor=clickColor;
  }
  else{
this.style.backgroundColor="#232323";
message.innerText="Try again";
  }
})


}

function colorChange(color) {

  for(let i=0 ;i< squares.length;i++){

    squares[i].style.backgroundColor=color;


   colorPick();


  }

}


function colorPick() {

  let random=Math.round(Math.random()*5);
  console.log(random);
  return color[random];
}


function genraterandomColor(num) {

  let arr=[];

  for(let i=0 ;i<num;i++) {

    arr.push(randomColor());

  }

    return arr;

}
function randomColor() {

let r,g,b;
  r=Math.round(Math.random()*255);

  g=Math.round(Math.random()*255);
  b=Math.round(Math.random()*255);

  return "rgb("+r+", "+g+", "+b+")";
}


let color=genraterandomColor(6);
let colorpick=colorPick((color.length)-1);

let h1=document.querySelector('h1');

let reset=document.getElementById("reset");


let message=document.getElementById('message');
let displayRgB=document.getElementById("displayRgb");
displayRgB.innerText=colorpick;
let squares=document.querySelectorAll('.square');
let EasyBtn=document.getElementById("easybtn");
let HardBtn=document.getElementById("hardbtn");
reset.addEventListener("click",function () {

color=genraterandomColor(6);
colorpick=colorPick(5);





displayRgB.innerText=colorpick;
colorChange(colorpick);
  for(let i=0 ;i< squares.length;i++){

    squares[i].style.backgroundColor=color[i];}
  h1.style.backgroundColor="steelblue";

})













          for(let i=0 ;i< squares.length;i++){

            squares[i].style.backgroundColor=color[i];

          squares[i].addEventListener("click",function () {

            let clickColor=this.style.backgroundColor;
           console.log(clickColor);
           console.log(colorpick);
            if(clickColor===colorpick){
              message.innerText="correct";
              reset.innerText="play Again?"
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


   colorPick(squares.length);


  }


}


function colorPick(num) {

  let random=Math.round(Math.random()*num);

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
EasyBtn.addEventListener("click",function () {

  EasyBtn.classList.add("selected");
  HardBtn.classList.remove("selected");
  color=genraterandomColor(3);
  colorpick=colorPick((color.length)-1);
  displayRgB.innerText=colorpick;
  h1.style.backgroundColor="steelblue";

  for(let i=0;i<squares.length;i++){

    if(color[i]){

      squares[i].style.backgroundColor=color[i];
    }
    else{

      squares[i].style.display="none";
    }
  }



})
HardBtn.addEventListener("click",function () {
  h1.style.backgroundColor="steelblue";

  HardBtn.classList.add("selected");
  EasyBtn.classList.remove("selected");

  color=genraterandomColor(6);
  colorpick=colorPick((color.length)-1);
  displayRgB.innerText=colorpick;

  for(let i=0;i<squares.length;i++){


      squares[i].style.backgroundColor=color[i];
    squares[i].style.display="block";

  }

});

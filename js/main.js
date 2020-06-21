let color=[
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 255)",
  "rgb(255, 0, 255)"
]

let colorpick=color[3];

let message=document.getElementById('message');
let displayRgB=document.getElementById("displayRgb");
displayRgB.innerText=colorpick;
let squares=document.querySelectorAll('.square');
for(let i=0 ;i< squares.length;i++){

  squares[i].style.backgroundColor=color[i];

squares[i].addEventListener("click",function () {

  let clickColor=this.style.backgroundColor;

  if(clickColor===colorpick){
    message.innerText="correct";
  }
  else{
this.style.backgroundColor="#232323";
message.innerText="Try again";
  }
})


}

alert("hello");

var randomimg1=Math.floor(Math.random() * 6)+1;
var diceImg1="images/dice"+randomimg1+".png"
var img1=document.querySelectorAll ("img")[0]
img1.setAttribute("src",diceImg1)


var randomimg2=Math.floor(Math.random() *6)+1;
var diceImag2="images/dice"+randomimg2+".png"
var img2=document.querySelectorAll ("img")[1]
img2.setAttribute("src",diceImag2)


if (randomimg1>randomimg2){
    document.querySelector ("h1").innerHTML="player 1 win"
}
else if (randomimg2>randomimg1){
    document.querySelector("h1").innerHTML ="player 2 win"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}
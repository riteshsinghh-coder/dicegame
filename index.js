const images=[ "dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
var count1=Math.random();
var f1=Math.round(count1*10);
var count2=Math.random();
var f2=Math.round(count2*10);
if(f1>5){
    f1=f1-5;
}
if(f2>5){
    f2=f2-5;
}

document.querySelector(".img1").setAttribute("src",images[f1]);
document.querySelector(".img2").setAttribute("src",images[f2]);

if(f1>f2){
    document.querySelector(".winner").innerhtml="winner is player 1";
}
else{
    document.querySelector(".winner").innerhtml="winner is player 2";
}
document.querySelector(".winner").innerhtml="winner is player 2";

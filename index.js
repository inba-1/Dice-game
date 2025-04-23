var dice1 = Math.floor(Math.random() * 6) + 1;
var dice1img=document.querySelectorAll("img")[0].setAttribute("src", "/images/dice"+dice1+".png");
var dice2=Math.floor(Math.random()*6)+1;
var diceimg2=document.querySelectorAll("img")[1].setAttribute("src","/images/dice"+dice2+".png");
if (dice1 > dice2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
} else if (dice2 > dice1) {
    document.querySelector("h1").innerHTML = "🚩Player 2 wins";
} else {
    document.querySelector("h1").innerHTML = "🚩Draw!";
}


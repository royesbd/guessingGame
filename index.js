


//guessing Game

var won=0;
var lost=0;

for(var i=1; i<=5;i++){

    var guessnumber= parseInt(prompt("Enter Your Number from 1 to 5 :  "));


    var randomnumber= Math.floor(Math.random()*5)+1;
    
    if(guessnumber==randomnumber){
        console.log("You have won");
        won++;
    }
    else{
    console.log("You have lost.The random number was   "   +randomnumber);
    lost++;
    }


}


document.write("Number of win:  "+won +"<br>");
document.write("Number of lost: "+lost+"<br>");
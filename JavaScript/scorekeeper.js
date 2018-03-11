//VARIABLE DECLARATIONS-----
var winningscore = document.getElementById("selectnum");//this is for the input number box
var p1button = document.querySelector("#p1");//this is for the player one button
var p2button = document.querySelector("#p2");//this is for the player TWO button
var reset = document.querySelector("#reset");//this is for the RESET button
var p1head = document.querySelector("#p1s");//this is for the player one header score
var p2head = document.querySelector("#p2s");//this is for the player two header score
var winningdisplay = document.querySelector("#limithead");//this is for the wi ning limit display header score
var p1score = 0;// defined plaer one initinal score to 0.
var p2score = 0;// defined plaer one initinal score to 0.
var endGame = false;//end game variable for checking when any palyers score becomes equal to winning score to end the game

//RESET function to reset everything
function resetit()
{
  p1score = 0;
  p2score = 0;
  p1head.classList.remove("winner");
  p2head.classList.remove("winner");
  p1head.textContent = "0";
  p2head.textContent = "0";
  endGame = false;
  winningdisplay.textContent = " ";
}
  //code to take inout from winning score and validating the winner
  winningscore.addEventListener("change", function(){
  winningdisplay.textContent = winningscore.value;
  resetit();
});

//code to change Player one header
p1button.addEventListener("click" , function(){
  if(!endGame){
  p1score++;
  if(p1score == winningscore.value){
    p1head.classList.add("winner");
    endGame = true;
  }
  p1head.textContent = p1score;
}
});

//code to change Player two header
p2button.addEventListener("click" , function(){
  if(!endGame){
  p2score++;
  if(p2score == winningscore.value){
    p2head.classList.add("winner");
    endGame=true;
  }
  p2head.textContent = p2score;
}
});
//code to reset everything
reset.addEventListener("click" , function(){
resetit();
winningscore.value = " ";

});

//SELECTIONS
var numSquares = 6;
var colors = [];   											//color array with the function called to generate it
var squares = document.querySelectorAll(".square");						//selecting the sqaures
var colorDisplay = document.querySelector("#colorDisplay");	 	//selecting the color h1 h1 tag
var SelectedColor;														//winning color selector with function colorpicker which picks the random color out of generated colours for selecting as a winning color
var print = document.querySelector("#print");									//displays the value try again or correct on the game window
var reset = document.querySelector("#reset");									//reset selector is used to called reset function to refresh the page
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");
//MANUPILATION

init();

function init()
{
	setupMode();
	setupSquares();
	resetBtn();
}

function setupMode(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === SelectedColor){
				print.textContent = "Correct!";
				reset.textContent = "Play Again?"
				changeColor(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				print.textContent = "Try Again"
			}
		});
	}
}



function resetBtn(){

	colors = arrayofcolorgenerator(numSquares);
	//pick a new random color from array
	SelectedColor = ColorPicker();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = SelectedColor;
	reset.textContent = "New Colors"
	print.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "#2196F3";
}

reset.addEventListener("click", function(){
	resetBtn();
})

//function to change the color of all squares when answer is correct
 function changecolor(color)
 {
	 for (var i = 0; i < squares.length; i++)
	 {
	 	squares[i].style.backgroundColor = SelectedColor;
	 }
 }

//to pick a random color from the color array for SelectedColor variable

function ColorPicker()
{
	//Math.random color selects the random number between 0-1 and w multiply it with length of colors array --
	//-- to select number between 0 to number of colours and then Math.floor sets the number to integer
	var color = Math.floor(Math.random() * colors.length);
	return colors[color];//returns the array of color index
}

//color Generator function
function arrayofcolorgenerator(number)
{
	var arr = [];
	for (var i = 0; i < number; i++)
	{
		arr.push(colorGenerator());
	}
	return arr;
	}

//using math.random we generated random numbers from 0-255 so we can replace on rgb(r,g,b)  to generate random colors.
function colorGenerator()
{
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	//format of color is --> rgb(r, g, b)
	var generated_color = "rgb(" + red + ", " + green + ", " + blue + ")";
	return generated_color;
}

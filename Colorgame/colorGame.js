//SELECTIONS
var numSquares = 6;
var colors = arrayofcolorgenerator(numSquares);   											//color array with the function called to generate it
var squares = document.querySelectorAll(".square");						//selecting the sqaures
var colorDisplay = document.querySelector("#colorDisplay");	 	//selecting the color header h1 tag
var SelectedColor = ColorPicker();														//winning color selector with function colorpicker which picks the random color out of generated colours for selecting as a winning color
var print = document.querySelector("#print");									//displays the value try again or correct on the game window
var reset = document.querySelector("#reset");									//reset selector is used to called reset function to refresh the page
var header = document.querySelector("h1");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
//MANUPILATION

colorDisplay.textContent = SelectedColor; //Assigns the randomdly generated winning color to the header tag

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = arrayofcolorgenerator(numSquares);
	SelectedColor = ColorPicker();
	colorDisplay.textContent = SelectedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = arrayofcolorgenerator(numSquares);
	SelectedColor = ColorPicker();
	colorDisplay.textContent = SelectedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

reset.addEventListener("click", function() {
	//generate all new colors
	colors = arrayofcolorgenerator(numSquares);
	//pick a new random color from array
	SelectedColor = ColorPicker();
	print.textContent="";
	this.textContent="New Colors";
	//change colorDisplay to match picked Color
	colorDisplay.textContent = SelectedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	header.style.background = "#2196F3";
});

//loop for square functions
for (var i = 0; i < squares.length; i++)
{
	//this assigns th colours to the squares
	squares[i].style.backgroundColor = colors[i];
	//created the main game logic here
	squares[i].addEventListener("click",function()
	{
		//clickedcolor grabs the colour of the square th user clicked
		var clickedcolor = this.style.backgroundColor;
		//validator to check the color
		if(clickedcolor === SelectedColor)
		{
			print.textContent = "correct";				//this changes the navigation header with print id to correct if the selected color is correct.
			changecolor(SelectedColor);						//function to change the color of all the squares to winning colours as the user selected the correted color
			reset.textContent="play Again?";			//reset button asking to play again
			header.style.backgroundColor=SelectedColor;
		}
		else
		{
			print.textContent = "try again";					//this appears in navigation header when user selected wrong color
			this.style.backgroundColor = "#232323";		//sets the background color of the wrongly selected square to same a body background color to disappear it
		}
	});
}

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

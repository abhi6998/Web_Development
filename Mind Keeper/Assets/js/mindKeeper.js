//This function is used to toggle on and off when item is done or not done.
$("ul").on("click","li",function()
{
  $(this).toggleClass("done");
});
//this function is to remove a todo list item
$("ul").on("click","span",function(event)
{
  $(this).parent().fadeOut(500,function()
  {
    $(this).remove();//remove removes the note
  });
  event.stopPropagation();//stopPropagation is used to stop event bubbling for a element inside many other elements like span
});

//this selector is for new list item with a userdefined function
$("#takeitem").keypress(addNewnote);

//this function is to add a new note
function addNewnote(event)
{
  if(event.which === 13)// .which tell us the charater code of the key pressed if that == 13 enter key is pressed
  {
    //variable ans stores the value of the note user has added
    var newNote = $(this).val();
    //this makes the input field back to blank after user inserts his input
    $(this).val(" ");
    //this if is to check that user doesnt enter anything blank
    if(newNote== "")
    {
      alert("please enter the note");
    }
    else
    {
      //add the note to the list
      $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + " " + newNote + "</li>");
    }
  }
}//addNewnote function ends here

//this function toggles the plus(add new note) button
$("#plus").on("click",function()
{
  $("#takeitem").fadeToggle(500);
});

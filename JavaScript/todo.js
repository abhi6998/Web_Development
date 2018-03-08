//this funtion is to load javascript after html loads within 500 miliseconds.
window.setTimeout(function() {
  var todo = [];
  do {
    //ask the user loop
    var ans = prompt("What do you want to do ?");

    if (ans == "new") {
      newtodo(); //funtion to add a new list item
    } else if (ans == "list") {
      viewtodo(); //funtion to view the list
    } else if (ans == "delete") {
      deltodo(); //funtion to delete the list item
    }
  } while (ans != "quit")
  console.log("bye! the app will exit now.."); //quits the list

  function newtodo() {
    var add = prompt("add in the list");
    todo.push(add);
    console.log(todo[todo.length - 1] + " is added in the list");
  }

  function viewtodo() {
    if (todo.length < 1) {
      var todo = [];
      console.log("list is empty");
    } else {
      console.log("****************");
      for (var i = 0; i <= todo.length - 1; i++) {
        console.log(i + ":" + todo[i]);
      }
      console.log("****************");
    }
  }

  function deltodo() {
    if (todo.length < 1)

    {
      var todo = [];
      console.log("list is empty");
    } else {
      var index = prompt("enter the index of item you want to delete");

      if (index <= todo.length - 1) {
        parseInt(index);
        console.log(todo[index] + " deleted");
        todo.splice(index, 1);
      } else {
        console.log("sorry wrong index");
      }
    }

  }


}, 500);

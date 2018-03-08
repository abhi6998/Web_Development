window.setTimeout(function() {
  var todo = [];
  do {
    var ans = prompt("What do you want to do ?");

    if (ans == "new") {
      var add = prompt("add in the list");
      todo.push(add);
      console.log(todo[todo.length - 1] + " is added in the list");
    } else if (ans == "list") {
      if (todo.length < 1)

      {
        var todo = [];
        console.log("list is empty");
      } else {
        console.log("****************");
        for (var i = 0; i <= todo.length - 1; i++) {
          console.log(i + ":" + todo[i]);
        }
        console.log("****************");
      }
    } else if (ans == "delete") {
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
  } while (ans != "quit")
  console.log("bye! the app will exit now..");
}, 500);

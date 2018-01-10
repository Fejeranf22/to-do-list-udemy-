// prompt that asks what would i like to do
var todoList= ["The first todo"];


var input = prompt("What would you like to do?");

  while (input !== "quit") {

    if(input === "list") {

  console.log(todoList);

    } else if (input === "new") {
      // ask for the new to do

      var newTodo = prompt("Go ahead and add something to the Todo list.")
      // add new Todo to the array

      todoList.push(newTodo)
      };
    // prompt("What would you like to do?");
    // prompt ("what else would you like to do??")
}
console.log("You have quit the app. Thanks for playing !!")


// list console. log the array.
// new adds or push  an item to the array
// quit is a kill switch that gets out f the prompt cycle

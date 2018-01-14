// prompt that asks what would i like to do
var todoList= ["The first todo", "the second todo","the thrd todo"];
var input = prompt("What would you like to do?");
  while (input != "quit") {
    if(input === "list") {
      listTodo();
    } else if (input === "add") {
      addTodo();
    } else if (input=== "delete") {
      deleteTodo();
    }
    // prompt("What would you like to do?");
    var input =  prompt ("what else would you like to do??")
 }
 console.log("You have quit the app. Thanks for playing !!");

 // the function definitions:::::::::::::

function listTodo(){
  console.log("**************");
  todoList.forEach(function(todo, i){
  console.log(i + " : " + todo);
  });
  console.log("**************");
};

function addTodo(){
  //  ask for the new to do
  var newTodo = prompt(" Please type something to add to the list.");
  // add new Todo to the array
  todoList.push(newTodo);
  // print added todo to the console
  console.log(" ' "+ newTodo + " '"+" has been added to the list")
};

function deleteTodo(){
    // "ask for the index of the item you want deleted"
    var index = prompt("at what index is the item you wish to delete???")
    // delete item from the List
    todoList.splice(index, 1);
    // console.log("item"+ " "+ "has been deleted")
    console.log("item at index:"+" '"+ index +"' "+ " has been deleted from the list.");
  }

//Task 1
let task1Title = prompt("Enter task 1 title");
console.log(`Title: ${task1Title}`);

let task1Description = prompt("Enter task 1 description");
console.log(`Description: ${task1Description}`);

let task1Status = prompt("Enter task 1 status (todo, doing, done)");

//invalid input for task 1
while (task1Status !== "todo" && task1Status !== "doing" && task1Status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    task1Status = prompt("Enter task 1 status (todo, doing, done)");
}
console.log(`Status: ${task1Status}`);

switch (task1Status) {
    case "todo":
        console.log(`Title: ${task1Title}, status: ${task1Status}`);
        break;
    
    case "doing":
        console.log(`Title: ${task1Title}, status: ${task1Status}`);
        break;

    case "done":
        console.log(`Title: ${task1Title}, status: ${task1Status}`);
        break;

    default: 
        console.log("no tasks completed, let's get to work!")
}

//Task 2
let task2Title = prompt("Enter task 2 title");
console.log(`Title: ${task2Title}`);

let task2Description = prompt("Enter task 2 description");
console.log(`Description: ${task2Description}`);

let task2Status = prompt("Enter task 2 status");

//invalid input for Task 2;
while(task2Status !== "todo" && task2Status !== "doing" && task2Status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    task2Status = prompt("Enter task 1 status (todo, doing, done)");
}
console.log(`Status: ${task2Status}`);

switch (task2Status) {
    case "todo":
        console.log(`Title: ${task2Title}, status: ${task2Status}`);
        break;

    case "doing":
        console.log(`Title: ${task2Title}, status: ${task2Status}`);
        break;

    case "done":
        console.log(`Title: ${task2Title}, status: ${task2Status}`);
        break;

    default: 
        console.log("no tasks completed, lets get to work buddy!")
}

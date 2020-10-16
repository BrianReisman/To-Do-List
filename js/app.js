// CODE EXPLAINED channel

//Select the Elements                                    //this seems to be a menu of elements
const clear = document.querySelector(".clear");          //learn about [queryselector]
const dateElement = document.getElementById('date');     //learn about [getElementById]
const list = document.getElementById("list");
const input = document.getElementById("input");

//Class names                                       //ohhhh a menu of .classNames now?
const CHECK = "fa-check-circle";                    //is there a reason these are all capitalized?
const UNCHECK =  "fa-circle-thin";                  //is there a reason these are all capitalized?
const LINE_THROUGH = 'lineThrough';                 //is there a reason these are all capitalized? 

//Variables
let LIST = [];
let id = 0; //he has this differently


// Show todays date
const options = {weekday: "long", month:"long", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//add to do function
function addToDo(toDo, id, done, trash){

    if(trash){ return;}

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
                <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                <p class="text ${LINE}">${toDo}</p>
                <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                </li>
            `;
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}

addToDo("coffe", 1, false, false);  //test out the function addToDo manually here


//add an item to the list when use hits the enter key    //I think the issue is here ~35:00
document.addEventListener("keyup",function(even){ //this is even in the video
    if(even.keycode == 13){
        const toDo = input.value;

        // if the input isn't empty
        if(toDo){
            addToDo(toDo, id, false, false);

            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            })

            id++;
        }
        input.value = "";
    }
});

//complete to do
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

//remove to do
function removeToDo(element){
    element.parentNode.parentNode.removeChild("element.parentNode");

    LIST[element.id].trash = true;
}

// target the items created dynamically

list.addEventListener("click"; function(event){                                             //'''''''''''''''''''''''''resume at 00:42:00'''''''''''''''''''''''''
    const element = event.target; //return the clicked element inside list
    const element = element.attributes.job.value; //complete or delete

    if(elementJob == "complete")
});
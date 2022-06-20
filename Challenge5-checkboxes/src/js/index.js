 import {episodes} from "./list.js";
 import {createList} from "./create.js";


 //selected the ui element on-screen
let uiItems = document.querySelector(".episodes");

const onload = () => {
    episodes.forEach((item) => {
        uiItems.appendChild(createList(item));
    });
   
};

onload();


//getting all checkboxes on-screen
let displayedItems = document.querySelectorAll("input");


let lastSelected;

//adding event listener on the checkboxes
displayedItems.forEach(item=>{
    item.addEventListener('click', (e)=>{
       
        let shiftKeyPressed = e.shiftKey;

        //if shiftkey was pressed and lastkey pressed is defined
        if(lastSelected && shiftKeyPressed){
            checkAll(lastSelected, e.target);
        }

        //updating the last selected
        lastSelected = e.target;
        if( !lastSelected.checked)
            lastSelected = undefined;
    })
})


const checkAll = (
    lastSelected,
    currentSelected
  ) => {
    let lastNode = lastSelected;
    let currentNode = currentSelected;
  
    let start = Array.prototype.indexOf.call(displayedItems, lastNode);
    let end = Array.prototype.indexOf.call(displayedItems, currentNode);
    if (start > end) {
      let temp = start;
      start = end;
      end = temp;
    }
  

    //checking all the checkboxes between the lastselected and currentselected
    while (start < end) {
      displayedItems[start].checked = true;
      start++;
    }
  };

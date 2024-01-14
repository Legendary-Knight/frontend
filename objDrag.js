class Block {
    constructor(inp, out){
        this.inp=inp;
        this.out=out;
        this.dup =document.getElementById("Duplicate");
        this.rec =document.getElementById("Rect");
    }
    getDup(){
        return this.dup;
    }
    getRec(){
        return this.rec;
    }
}
//Make the DIV element draggagle:
const b = new Block(1,1);
var arr = [];
arr.push(b);
dragElement(arr[0].rec);
var i = 0;
/*
var x = document.getElementsByClassName("Duplicate")
for(var j=0; x.length; j++){
    dragElement(x[i]);
}
*/
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;

  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }





  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    // get the mouse cursor position at startup:
    /*
    var original = document.getElementById("Duplicate");
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "Duplicate" + ++i;
    // or clone.id = ""; if the divs don't need an ID
    original.parentNode.appendChild(clone);
    */
    
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function Submit(){
    let var1 = document.querySelector("#var1");
    let var2=document.querySelector("#var2");
    alert(var1.value)
}

function Submit(){
    let var1 = document.querySelector("#var1");
    let var2=document.querySelector("#var2");
    alert(var1.value)
}

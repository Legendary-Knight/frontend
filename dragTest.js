var duplicateElements = document.querySelectorAll('.Duplicate');

duplicateElements.forEach(function(duplicate) {
    makeDraggable(duplicate);
});

function makeDraggable(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var header = element.querySelector("#Rectheader") || element;

    header.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function cloneElement() {
    var original = document.querySelector('.Duplicate');
    var clonedElement = original.cloneNode(true);
    document.body.appendChild(clonedElement);

    // Make the cloned element draggable
    makeDraggable(clonedElement);
}

function Submit() {
    let var1 = document.querySelector("#var1");
    let var2 = document.querySelector("#var2");
    alert(var1.value);
}

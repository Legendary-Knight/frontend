import './rect.css'
let Draggable = require('react-draggable');
let DraggableCore = Draggable.DraggableCore;

const Block = () => {
    return (
        <Draggable class="Rect">
            <div id="Rect">
                <div class="Rectheader">Click here to move</div>
                <p>Moveable</p>
                <div id="Options">
                    <div class="dropdown">
                        <button class="dropbtn">i</button>
                        <div class="dropdown-content">
                            <label for="var1">Variable1: </label>
                            <input type="text" id="var1" name="var1" /><br></br>
                            <label for="var2">Variable2: </label>
                            <input type="text" id="var2" name="var2" /><br></br>
                            <button onclick={Submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div >
        </Draggable>

    );

}

function Submit() {
    let var1 = document.querySelector("#var1");
    let var2 = document.querySelector("#var2");
    alert(var1.value)
}

export default Block;
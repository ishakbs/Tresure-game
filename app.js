var hall
var kitchen
var bathroom
var garage

function start() {
    document.getElementById('start').innerHTML = '<div id="start-point"> <p> You are in the house which way you go Left or Right? <br><br> </p> <button  onclick="right()">Right</button> <button  onclick="left()">Left</button> </div>';
}
function right() {
    document.getElementById('start-point').innerHTML = ' you are in the kitchen the tresure is not here <br><br> <button onclick="start()">back</button>'
}
function left() {
    document.getElementById('start-point').innerHTML = ' you are in the hall the tresure is not here but it is close which way now left or right <br><br> <button  onclick="righthall()">Right</button> <button  onclick="lefthall()">Left</button> '
}
function righthall() {
    document.getElementById('start-point').innerHTML = ' you are in the garage but wait something is there lets see woow it is the tresure you found it congrats <br><br> <button onclick="start()">Start again</button>'
}
function lefthall() {
    document.getElementById('start-point').innerHTML = ' you are in the bathroom mmmm nothing is here <br><br> <button  onclick="left()">back</button> </div>'
}


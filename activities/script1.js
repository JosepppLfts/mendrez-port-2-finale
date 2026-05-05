
function runFor() {
    let num = parseInt(document.getElementById("forNum").value);
    let text = document.getElementById("forText").value;
    let output = "";

    for (let i = 1; i <= num; i++) {
        output += i + ". " + text + "<br>";
    }
    document.getElementById("forResult").innerHTML = output;
}


function runWhile() {
    let num = parseInt(document.getElementById("whileNum").value);
    let text = document.getElementById("whileText").value;
    let output = "";
    let i = 1;

    while (i <= num) {
        output += i + ". " + text + "<br>";
        i++;
    }
    document.getElementById("whileResult").innerHTML = output;
}


function runDoWhile() {
    let num = parseInt(document.getElementById("doNum").value);
    let text = document.getElementById("doText").value;
    let output = "";
    let i = 1;

    if (isNaN(num)) return; // Prevent infinite if empty

    do {
        output += i + ". " + text + "<br>";
        i++;
    } while (i <= num);
    
    document.getElementById("doResult").innerHTML = output;
}


function clearLoop(type) {
    document.getElementById(type + "Num").value = "";
    document.getElementById(type + "Text").value = "";
    document.getElementById(type + "Result").innerHTML = "";
}
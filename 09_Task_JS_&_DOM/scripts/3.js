function isWordIsogram() {
    var s = document.getElementById("writeMessage").value;
    document.getElementById("isWordIsogram").innerHTML = new Set(s.toLowerCase()).size === s.length;
}

function resetMessage() {
    document.getElementById("writeMessage").value = "";
    document.getElementById("isWordIsogram").innerHTML = "";
}

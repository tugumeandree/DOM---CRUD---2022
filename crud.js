//Read - getElementById

//Function to create elemnts in the dom
function create(){
    const btn = document.createElement("button");
    //creates the  <button> element
    btn.innerHTML = "Question";
    document.body.appendChild(btn);
}

//Function to READ elemnts in the dom
const readQn = document.getElementById("readQn");
const showQn = document.getElementById("showQn");

function read(){
   showQn.innerHTML = readQn.textContent;

}

//Function to update elemnts in the dom
function update(){
    const updateQn = document.getElementById("updateQn");
    updateQn.innerHTML = "Updated Question"
}

//Function to delete elements in the dom
function go(){
    var elem = document.querySelector("#btn4");
    elem.style.display= "none";
    
    // elem.parentNode.removeChild (elem);
   
}
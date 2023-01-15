const gridElement = document.getElementById("grid")
const answerElement = document.getElementById("answer")
const linkElement = document.getElementById("link")

const gridSize = 5
const gridArray = localStorage.getItem("grid")? JSON.parse(localStorage.getItem("grid")) : []
const correctArray = [[true,false,false,false,true],[false,false,false,false,false],[false,true,false,false,true],[false,true,false,false,false],[true,true,true,true,true]]
var rewarded = false

function randomInRange(start,end){
    return Math.floor(Math.random() * (end - start + 1) + start);
}

function toggle(x,y,e){
    
    
    if (!gridArray[x]) {gridArray[x] = []}

    if (gridArray[x][y] == false){
        e.style.backgroundColor = "lightgrey"
        gridArray[x][y] = true
    } else {
        e.style.backgroundColor = "black"
        gridArray[x][y] = false
    }
    if (arraysEqual(gridArray,correctArray)){onCorrect()}
}

function correctGridToNumberRow(){
    let string = ""
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            if (correctArray[x][y] == true) {
            string += randomInRange(0,4)
                       
            }else {
                string += randomInRange(5,9)
            }
        }
    }
    console.log(string)
}
correctGridToNumberRow()
function onCorrect(){
    if (rewarded){return}
    rewarded = true
    answerElement.innerHTML = "Õige! :3"
    linkElement.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    linkElement.textContent = "Reward"
    linkElement.id ="linkE"
    answerElement.id ="answerE"
    console.log("pog")
    
}

function arraysEqual(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

function getCell(x,y,e){
    if (arraysEqual(gridArray,correctArray)){onCorrect()}
    if (!gridArray[x]) {gridArray[x] = []}
    if (gridArray[x][y] == true){
        e.style.backgroundColor = "lightgrey"
    } else{
        gridArray[x][y] = false
        e.style.backgroundColor = "black"
    }

}


for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
        
        let newElement = document.createElement("div")
        newElement.classList.add("cell")
        gridElement.appendChild(newElement)
        getCell(x,y,newElement)
        newElement.onclick = function () {
            toggle(x,y,newElement)
            localStorage.setItem("grid",JSON.stringify(gridArray))
                
          }
        
    }
}
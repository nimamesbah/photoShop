const colorInput = document.querySelector("#colorInput")
const backgroundInput =document.querySelector("#backgroundInput")
const paintSection= document.querySelector(".paint-section")
const penSvg = document.querySelector("#pen")
const penStroke =document.querySelector("#penColor")
const sizeSvg= document.querySelector("#penSize")
const eraseSvg = document.querySelector("#eraser")
const penParent= document.querySelector(".penParent")

let count=0
let sizeCount=-1
const sizeArr=[{scale:0.5,size:4},{scale:0.8,size:8},{scale:1,size:12}]
let sizeResult=0
function counter(){
count++
console.log(count)
penSvg.classList.toggle("scale")
}
function penSizes(){
    
    sizeCount++
    
        sizeResult=sizeArr[sizeCount].size
        sizeSvg.style=`scale:${sizeArr[sizeCount].scale};`
    
    if(sizeCount===2)
        sizeCount=-1
}
penSizes()

function handlePenClick(evt) {
    // count++
    
    console.log(count)
    
    const color = colorInput.value;
    
       
           const box = document.createElement("span")
           box.style = ` z-index:0; position:absolute; top:${evt.clientY}px; left:${evt.clientX}px; background-color:${count%2===0 ? "transparent" : color}; width:${sizeResult}px; height:${sizeResult}px`;
           paintSection.addEventListener("mousedown", () => paintSection.addEventListener("mousemove", handlePenClick));
    
    
        paintSection.addEventListener("mouseup", () => paintSection.removeEventListener("mousemove", handlePenClick))
    
        paintSection.appendChild(box)
 
        paintSection.removeEventListener("mousedown",handlePenClick)
    
        
        paintSection.removeEventListener("mousedown",handlePenClick)
        
        
        
        
    }
    function backgroundColor(){
        let inputValue=backgroundInput.value;
        paintSection.style.backgroundColor=inputValue
        console.log(inputValue)
        bgChangeP()

    }
    backgroundColor()
    function penColorChange(){
        penSvg.style=`background-color:${colorInput.value};`
        document.getElementById("circle").setAttribute("fill", colorInput.value)
        document.getElementById("eraserColor").setAttribute("stroke",colorInput.value)
        document.querySelector(".eraseAllBtn").style.borderColor=colorInput.value
        
        
        console.log( penStroke.stroke)
        console.log( colorInput.value)

    }
    penColorChange()
    function eraseAllHover(){
        let btn = document.querySelector(".eraseAllBtn")
        btn.style.backgroundColor=colorInput.value
        if(colorInput.value==="#000000")
            btn.style.color="#ffffff"
        if(colorInput.value==="#ffffff")
            btn.style.borderColor="#000000"
        btn.addEventListener("mouseout",()=> {btn.style.backgroundColor="transparent"; btn.style.color="#000000"})

    }
    penColorChange()
    function eraser(evt){
        let bg=backgroundInput.value
        let eraseBox = document.createElement("p")
        // eraseSvg.classList.toggle("scale")
        if(count%2!==0){
            handlePenClick()
            counter()

        }
        
        eraseBox.style=`display:inline-block; position:absolute; top:${evt.clientY}px;left:${evt.clientX}px; background-color:${bg}; width:${sizeResult}px; height:${sizeResult}px; `
        
        paintSection.addEventListener("mousedown", () => paintSection.addEventListener("mousemove", eraser));
    
    
        paintSection.addEventListener("mouseup", () => paintSection.removeEventListener("mousemove", eraser))
        paintSection.appendChild(eraseBox)
    
        
 
        paintSection.removeEventListener("mousedown",eraser)
    
        
        paintSection.removeEventListener("mousedown",eraser)
        

    }
    function bgChangeP(){
        
        
        let bg=backgroundInput.value
        let items=document.querySelectorAll("p")
        for (const item of items) {
            item.style.backgroundColor=bg

        }

    }
    function eraseAll(){
        paintSection.innerHTML=""
    }
    function penFreez(){
        penSvg.classList.add("disabled")
        penParent.classList.add("disabled")
    }
    function penUnfreez(){
        penSvg.classList.remove("disabled")
        penParent.classList.remove("disabled")
    }

    






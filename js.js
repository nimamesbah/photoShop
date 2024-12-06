const colorInput = document.querySelector("input")
const paintSection= document.querySelector(".paint-section")
const penSvg = document.querySelector("#pen")
const penStroke =document.querySelector("#penColor")
const sizeSvg= document.querySelector("#penSize")
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
    function penColorChange(){
        penSvg.style=`background-color:${colorInput.value};`
        document.getElementById("circle").setAttribute("fill", colorInput.value)
        
        
        console.log( penStroke.stroke)
        console.log( colorInput.value)

    }
    penColorChange()
    function eraser(){
        
    }

    






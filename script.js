var btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    var a = document.getElementById("main")
    a.style.backgroundColor = changeColor()
})

function changeColor(){
    var b = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    console.log(b)
    return b
}

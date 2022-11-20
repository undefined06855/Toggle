const switches = Array.from(document.getElementsByClassName("switch"))
var flags = {}


function checkResize()
{
    if (document.body.offsetHeight < 650)
    {
        if (document.body.offsetWidth < 1200)
        {
            document.getElementById("wrapper").style.display = "none"
            document.getElementById("warning").style.display = "block"
        }
        else
        {
            document.getElementById("wrapper").style.display = "flex"
            document.getElementById("warning").style.display = "none"
        }
        document.getElementById("wrapper").style.flexDirection = "row"
    }
    else
    {
        document.getElementById("wrapper").style.display = "flex"
        document.getElementById("wrapper").style.flexDirection = "column"
    }
}

checkResize()
window.addEventListener("resize", checkResize)

switches.forEach(s => {
    s.addEventListener("click", () => {
        if (s.classList.contains("right")) s.classList.remove("right");
        else                               s.classList.add("right");
    })
})

document.getElementById("secret").addEventListener("click", () => {
    document.getElementById("secret").style.opacity = 1
})


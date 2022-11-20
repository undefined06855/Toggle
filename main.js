const switches = Array.from(document.getElementsByClassName("switch"))

function checkResize()
{
    if (document.body.offsetHeight < 600)
    {
        if (document.body.offsetWidth < 1100)
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
        console.log(s.classList)
        if (s.classList.contains("right")) s.classList.remove("right");
        else                               s.classList.add("right");
    })
})

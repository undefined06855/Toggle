const switches = Array.from(document.getElementsByClassName("switch"))
var flags = {}

function checkPattern()
{
    var pressed = ""
    switches.forEach(s => {
        pressed += s.classList.contains("right") ? "1" : "0"
    })

    if (pressed == "11111")
    {
        if (!flags.pressedAll)
        new Message("Wow. You just pressed all of them. Very original.")
        flags.pressedAll = true
    }
    else if (pressed == "10101")
    {
        if (!flags.everyOther1)
        new Message("Just every other one? It's very boring.")
        flags.everyOther1 = true
    }
    else if (pressed == "01010")
    {
        if (!flags.everyOther2)
        new Message("No, Yes, No, Yes, No... Are you getting bored of this?")
        flags.everyOther2 = true
    }
    else if (pressed == "00000")
    {
        if (!flags.none)
        new Message("You just turned some switches on and then off...")
        flags.none = true
    }
    else if (pressed == "10001")
    {
        if (!flags.outer)
        new Message("Top and also the bottom? Odd.")
        flags.outer = true
    }
    else if (pressed == "00100")
    {
        if (!flags.justmiddle)
        new Message("Just the middle toggle. Simple but boring.")
        flags.justmiddle = true
    }
    else if (pressed == "01110")
    {
        if (!flags.middle3)
        new Message("The three middle toggles...")
        flags.middle3 = true
    }
    else if (pressed == "11011")
    {
        if (!flags.outer2)
        new Message("The outer 2 toggles.")
        flags.outer2 = true
    }
    else if (pressed == "01101")
    {
        if (!flags.random)
        new Message("Either you looked in the code to find this, or you got it by chance.")
        flags.random = true
    }
    else if (pressed == "10000")
    {
        if (!flags.justFirst)
        new Message("You just pressed the first one. You're just testing this website, I assume?")
        flags.justFirst = true
    }
    else if (Math.floor(Math.random * 1000) == 1)
    {
        if (!flags.random1000)
        new Message("Every time you toggle a wrong switch, you get a 1/1000 chance to get this.")
        flags.random1000 = true
    }
    else if (Math.floor(Math.random * 10000) == 1)
    {
        if (!flags.random10000)
        new Message("Every time you toggle a wrong switch, you get a 1/10000 chance to get this!")
        flags.random10000 = true
    }
    else if (pressed == "111111")
    {
        if (!flags.WHAT)
        new Message("You're not supposed to be able to get this... There are only 5 switches!")
        flags.WHAT = true
    }
    else console.log("No match!")
}

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

        checkPattern()
    })
})

class Message
{
    constructor (msg)
    {
        if (typeof msg !== "string") msg = msg.toString()

        var el = document.createElement("div")

        el.classList.add("message")
        el.innerText = msg

        document.body.appendChild(el)

        setTimeout(() => {
            el.classList.add("fadeout")
            setTimeout(() => el.remove(), 2000)
        }, 3000)
    }
}
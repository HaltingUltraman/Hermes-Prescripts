let text = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=~`[]{}|;':\",./<>?";
let delay = timeInMs => new Promise(res => setTimeout(res, timeInMs));
let cycling = true;

async function cyclingText()
{
    while (cycling)
    {
        document.querySelectorAll(".hermesCycle").forEach(element =>
        {
            element.textContent = text[Math.floor(Math.random() * (text.length - 1))];
        });
        await delay(30);
        document.getElementById("prescriptActivator").addEventListener("click", () => 
        {
            cycling = false;
        });
    }
}

async function prescriptActivated()
{
    document.getElementById("hermesCommand").textContent = "";
    document.getElementById("prescriptAudio").play();
    document.getElementById("prescriptActivator").disabled = true;

    document.querySelectorAll(".hermesCycle").forEach(element =>
    {
        element.textContent = "";
    });

    let commands = ["Jab them with a Fpoon...", "Penetrate the Lungs with a Stiletto...", 
        "Rip the Flesh to Ten Thousand Strips with a Whip...", "Lacerate through Space Itself with a Scythe, Like a Certain Someone...", 
        "CLEAR."];

    let command = commands[Math.floor(Math.random() * (commands.length - 1))];

    for (let i = 0; i < command.length; ++i)
    {
        document.getElementById("hermesCommand").textContent += command[i];
        await delay(50);
    }

    document.getElementById("prescriptEnded").disabled = false;
}

async function prescriptFinished()
{
    document.getElementById("prescriptAudio2").play();
    document.getElementById("prescriptEnded").disabled = true;

    for (let i = document.getElementById("hermesCommand").textContent.length; i > 0; --i)
    {
        document.getElementById("hermesCommand").textContent = document.getElementById("hermesCommand").textContent.slice(0, -1);
        await delay(50);
    }

    document.getElementById("prescriptActivator").disabled = false;
    cycling = true;
    cyclingText();
}

cyclingText();
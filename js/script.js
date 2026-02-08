const stages = [
    {
        text: "Wait actually? Why not?",
        yes: "Okay, I'll be your Valentines.",
        no: "No thanks"
    },
    {
        text: "Dude...that's not nice.",
        yes: "Okay, okay, I'll be your Valentines.",
        no: "I'm good."
    },
    {
        text:"Are you serious?",
        yes: "Fine, I'll be your Valentines.",
        no: "I'm really good, I promise."
    },
    {
        text: "I'm going to ask you one last time.",
        yes: "Fine.",
        no: "No."
    }
];

const angryImage = "./images/man_bowing_angry.png";
const image = document.getElementById("valentinesImage");
let stage = -1;
yesbutton = document.getElementById("yes");
nobutton = document.getElementById("no");

yesbutton.addEventListener("click", function() {
    location.href = "yay.html";
});

nobutton.addEventListener("click", function() {
    stage++;
    image.src = angryImage;
    if (stage < stages.length) {
        document.getElementById("valentinesQuestion").innerHTML = "<b>" + stages[stage].text + "</b>";
        yesbutton.innerHTML = stages[stage].yes;
        nobutton.innerHTML = stages[stage].no;
    }
});
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
        text:"내 발렌타인이 되어줄래?",
        yes: "진짜?",
        no: "네."
    },
    {
        text: "Let's pretend I didn't see that. I'm really trying here.",
        yes: "Sure!",
        no: "No, I don't want to."
    },
    {
        text: "Come on. Just say yes.",
        yes: "Why not. I'll be your Valentines.",
        no: "🥱"
    },
    { 
        text: "Remember thunderdome? That was fun.",
        yes: "...",
        no: "You think I'd say yes after that?"
    },
    {
        text: "Alright, I'm starting to get a little upset.",
        yes: "I'd love to!",
        no: "Still no."
    },
    {
        text: "This is getting drawn out. Just say yes.",
        yes: "Yes.",
        no: "No."
    },
    {
        text: "I'm going to ask you one last time.",
        yes: "Yes.",
        no: "No."
    }
];

const angryImage = "./images/man_bowing_angry.png";
const image = document.getElementById("valentinesImage");
let stage = -1;
let noCllcks = 0;
yesbutton = document.getElementById("yes");
nobutton = document.getElementById("no");
valentinesQuestion = document.getElementById("valentinesQuestion");
yesbutton.addEventListener("click", function() {
    location.href = "yay.html";
});

nobutton.addEventListener("click", function() {
    stage++;
    noCllcks++;
    image.src = angryImage;
    if (stage < stages.length) {
        valentinesQuestion.innerHTML = "<b>" + stages[stage].text + "</b>";
        yesbutton.innerHTML = stages[stage].yes;
        nobutton.innerHTML = stages[stage].no;
    }
    if(stage === stages.length - 2) {
        enableNoRepel();
    }
    if(stage === stages.length - 1) {
        yesSizeincrease();
    }
    if (noCllcks > stages.length + 1) {
        yesScale = 1;
        valentinesQuestion.innerHTML = "<b>Be my Valentines!</b>";
        valentinesQuestion.classList.add("daunting");
        yesbutton.style.display = "large";
        yesbutton.innerHTML = "Okay!";
        nobutton.style.display = "none";
    }
});

let yesScale = 1;
let yesInterval = null;
function yesSizeincrease() {
    yesbutton = document.getElementById("yes");
    nobutton = document.getElementById("no");

    nobutton.addEventListener("click", function() {
        yesScale += 0.1;
        yesbutton.style.transform = `scale(${yesScale})`;
    });
    if (yesInterval){
        return;
    }
    yesInterval = setInterval(function() {
        yesScale += 0.1;
        yesbutton.style.transform = `scale(${yesScale})`;
    }, 1000);
}

function enableNoRepel() {
    const noButton = document.getElementById("no");

    document,addEventListener("mousemove", function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const buttonRect = noButton.getBoundingClientRect();
        const buttonX = buttonRect.left + buttonRect.width / 2;
        const buttonY = buttonRect.top + buttonRect.height / 2;
        const distanceX = mouseX - buttonX;
        const distanceY = mouseY - buttonY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        const repelDistance = 300;

        if (distance < repelDistance) {
            const repelX = (distanceX / distance) * (repelDistance - distance);
            const repelY = (distanceY / distance) * (repelDistance - distance);
            noButton.style.transform = `translate(${repelX}px, ${repelY}px)`;
        }
    });
}

/* jshint esversion: 6 */
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
});


function speeen() {
    const fumo = document.getElementById("fumo");
    fumo.classList.toggle("spin"); // Adds/removes the spin class
}

function spawnStars() {
    const starAmt = (screenWidth / 250) * (screenHeight / 250);
    for (let i = 0; i < starAmt; i++)
    {
        let star = document.createElement("div");
        star.className = "star";
        star.style.position = "absolute";
        star.style.top = Math.floor(Math.random() * screenHeight) + "px";
        star.style.left = Math.floor(Math.random() * screenWidth) + "px";
        star.style.animationDuration = Math.random() * 1.5 + 0.5 +  "s";

        document.body.appendChild(star);
    }
}

function textTypingEffect(element, text, i = 0) {

    if (text[i] === '\n') { 
        // If the character is a newline character, add a <br> tag
        element.appendChild(document.createElement("br"));
    } else {
        // Otherwise, append the character to the text content
        element.textContent += text[i];
    }

    if (i === text.length - 1) {
        return; // End recursion when all characters are typed
    }
    setTimeout(() => textTypingEffect(element, text, i + 1), 50); // Ensure recursive delay is correctly passed
}


spawnStars(); 

window.onload = () => {
    setTimeout(() => {
        const introElement = document.getElementById("introText");
        const text = "Welcome!";
        const text2 = "This is Wilkins, a student from NYP Game Development and Technology";

        textTypingEffect(introElement, text);
    }, 500);
};

window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
});
let isIntro = true;

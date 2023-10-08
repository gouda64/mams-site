const overhead = document.querySelector(".overhead");
// overhead.style.display = "none";

overhead.querySelector("img").addEventListener("click", (event) => {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.top = event.pageY + "px";
    bubble.style.left = event.pageX + "px";
    overhead.appendChild(bubble);
    bubble.animate({
        height: ["1rem", "250vh"],
        width: ["1rem", "250vw"],
        boxShadow: ["0 0 0.75rem 0.75rem black", "0 0 20rem 20rem black"],
        easing: ["ease-in", "ease-out"],
    },
    {
        duration: 2000,
    });
    setTimeout(() => {
        overhead.querySelector("img").style.display = "none";
        overhead.querySelector(".click-reminder").style.display = "none";
        overhead.style.backgroundColor = "black";
        bubble.style.display = "none";
        overhead.animate({
            opacity: ["100%", "0"],
            easing: ["ease-in", "ease-out"],
        },
        {
            duration: 400,
        });

        setTimeout(() => {
            overhead.style.display = "none";
        }, "390");
        
    }, "1950");
});

document.addEventListener("mousemove", (event) => {
    if (overhead.style.display !== "none") {
        adjustOverheadStyle(event.clientX, event.clientY);
    } 
});

function adjustOverheadStyle(mouseX, mouseY) {
    const img = overhead.querySelector("img");
    let centerX = img.offsetLeft + img.offsetWidth / 2;
    let centerY = img.offsetTop + img.offsetHeight / 2;
    let dist = Math.sqrt(Math.pow((centerX - mouseX), 2) + Math.pow((centerY - mouseY), 2));
    img.style.boxShadow = `0 0 ${40*window.innerHeight*(1.0/dist)}px ${20*window.innerHeight*(1.0/dist)}px white`;
    // img.style.transform = `scale(${window.innerHeight/10*(1.0/dist)})`;
}
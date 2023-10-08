document.querySelectorAll(".drop-trigger").forEach((trig) => {
    // trig.querySelector(".before").style.transform = "rotate(90)";
    trig.addEventListener("click", () => {
        const tar = trig.parentElement.nextElementSibling;
        if (tar.style.display === "none") {
            tar.style.display = "block";
            tar.animate({
                height: ["0", tar.offsetHeight + "px"],
                easing: ["ease-in", "ease-out"],
            },
            {
                duration: 320,
            });
            trig.querySelector(".before svg").animate({
                transform: ["rotate(-90deg)", "rotate(0)"],
                easing: ["ease-in", "ease-out"],
            },
            {
                duration: 320,
            });
            setTimeout(() => {
                trig.querySelector(".before svg").style.transform = "rotate(0)";
            }, "300");  
            setTimeout(() => {
                tar.style.overflow = "auto";
            }, "400");
            
        }
        else {
            tar.style.overflow = "hidden";
            tar.animate({
                height: [tar.offsetHeight + "px", "0"],
                easing: ["ease-in", "ease-out"],
            },
            {
                duration: 320,
            });
            trig.querySelector(".before svg").animate({
                transform: ["rotate(0)", "rotate(-90deg)"],
                easing: ["ease-in", "ease-out"],
            },
            {
                duration: 320,
            });
            setTimeout(() => {
                tar.style.display = "none";
                trig.querySelector(".before svg").style.transform = "rotate(-90deg)";
            }, "300");   
        }
    });
});

const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu");

menu.addEventListener("click", (event) => {
    sidebar.setAttribute("style", "display: flex !important");
    sidebar.style.left = (-sidebar.offsetWidth) + "px";
    sidebar.style.right = "100vw";
    sidebar.animate({
        left: [-sidebar.offsetWidth + "px", "0"],
        right: ["100vw", "0"],
        easing: ["ease-in", "ease-out"],
    },
    {
        duration: 300,
    });
    setTimeout(() => {
        sidebar.style.left = "0";
        sidebar.style.right = "0";
    }, "290")

});

document.querySelector(".close").addEventListener("click", (event) => {
    sidebar.animate({
        left: ["0", -sidebar.offsetWidth + "px"],
        right: ["0", "100vw"],
        easing: ["ease-in", "ease-out"],
    },
    {
        duration: 300,
    });
    setTimeout(() => {
        sidebar.setAttribute('style', 'display:none !important');
    }, "290")
});
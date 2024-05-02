// Skill hover animations are in CSs 

// Ripple Button Animation 
// button animation refernced from https://www.sitepoint.com/button-micro-interactions/#ripplemicrointeraction


let btn = document.querySelectorAll(".rippleButton");
btn.forEach((btn) => {
    btn.onclick = function (e) {
        let x = e.clientX;
        let y = e.pageY;
        let ripples = document.createElement("span");

        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1500); /*1000 = 1s*/
    };
});

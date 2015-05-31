window.addEventListener("DOMContentLoaded", function () {


    // Add the "particles" egg
    hooker.add("particles", function (body) {
        if (body.querySelector("#particlesScript")) {
            console.log("Particles are already live!");
        } else {
            var res = false,
                scr = document.createElement("script");

            scr.setAttribute("type", "text/javascript");
            scr.setAttribute("id", "particlesScript");
            scr.setAttribute("src", "vendor/particles.js/particles.min.js");

            scr.onload = scr.onreadystatechange = function () {
                if (!res && (!this.readyState || this.readyState === "complete")) {
                    res = true;
                    console.log("Loading particles configuration...");
                    particlesJS.load("main", "js/particles.json", function () {
                        document.querySelector("body > canvas").setAttribute("style", "z-index: -1;");
                        console.log("Triggerred particles animation!");
                    });
                }
            };
            console.log("Loading particlesJS...");
            body.appendChild(scr);
        }
    });

    // Add the "invert" egg
    hooker.add("invert", function (body) {
        console.log("Inverting colours...");
        body.classList && body.classList.toggle("inverted");
    });

});

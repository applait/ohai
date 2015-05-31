window.addEventListener("DOMContentLoaded", function () {


    // Add the "particles" egg
    hooker.add("particles", function (body) {
        if (body.querySelector("#particlesScript") === null) {
            var res = false,
                scr = document.createElement("script");

            scr.setAttribute("type", "text/javascript");
            scr.setAttribute("id", "particlesScript");
            scr.setAttribute("src", "vendor/particles.js/particles.min.js");

            scr.onload = scr.onreadystatechange = function () {
                if (!res && (!this.readyState || this.readyState === "complete")) {
                    res = true;
                    particlesJS.load("main", "js/particles.json", function () {
                        document.querySelector("body > canvas").setAttribute("style", "z-index: -1;");
                    });
                }
            };
            body.appendChild(scr);
        }
    });

    // Add the "invert" egg
    hooker.add("invert", function (body) {
        body.classList && body.classList.toggle("inverted");
    });

});

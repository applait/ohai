var hooker = {

    // if listener for pushing to stack is activated
    activated: false,

    // the hooker stack
    stack: [],

    // available hooks
    hooks: {},

    // Add a new hook
    add: function (match, egg) {
        if (!(typeof match === "string" && typeof egg === "function")) {
            console.error("match should be string, and egg should be function");
            return false;
        }
        if (hooker.hooks[match]) {
            console.error("a hook with the match %s already exists", match);
            return false;
        }
        hooker.hooks[match.toLowerCase()] = egg;
        return true;
    },

    // reset hooker stack and state
    reset: function (activate) {
        if (activate) {
            hooker.activated = true;
        } else {
            hooker.activated = false;
        }
        hooker.stack = [];
    }
};

document.addEventListener("keyup", function (evt) {

    // Activate on Enter, or trigger hook on second enter
    if (evt.keyCode === 13) {
        if (hooker.activated && hooker.stack.length > 0) {
            var match = hooker.stack.join("");
            if (match && hooker.hooks[match]) {
                try {
                    hooker.hooks[match](document.body);
                } catch (e) {
                    console.error(e);
                }
            }
            hooker.reset();
        } else {
            hooker.reset(true);
        }
    } else {
        hooker.activated &&
            hooker.stack.push(String.fromCharCode(evt.keyCode).toLowerCase());
    }

});

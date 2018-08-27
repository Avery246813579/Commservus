let prototype = module.exports;
const DEBUG = false;

/**
 * Logs a message to the console
 *
 * @param message
 */
prototype.log = function (message) {
    console.log("Commservus >> " + message);
};

prototype.debug = function (message) {
    if (!DEBUG) {
        return;
    }

    console.log("Commservus Debugger >> " + message);
};
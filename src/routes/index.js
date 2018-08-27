const Logger = require("./../util/Logger");
const ROUTES = [
    "GeneralRoute.js"
];

function RouteIndex(app) {
    for (let route of ROUTES) {
        require("./" + route)(app);
    }

    Logger.log("All " + ROUTES.length + " loaded in successfully");
}

module.exports = RouteIndex;
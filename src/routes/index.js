const ROUTES = [
    "GeneralRoute.js"
];

const Logger = require("./../util/Logger");

for (let route of ROUTES) {
    require("./" + route);
}

Logger.log("All " + ROUTES.length + " loaded in successfully");
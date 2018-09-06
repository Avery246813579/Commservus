const Logger = require("./../util/Logger");
const ROUTES = [
    "GeneralRoutes",
    "AccountRoutes",
    "EventRoutes",
    "OrganizationRoutes"
];

function RouteIndex(app) {
    for (let route of ROUTES) {
        require("./" + route + ".js")(app);
    }

    Logger.log("All " + ROUTES.length + " route files loaded in successfully");
}

module.exports = RouteIndex;
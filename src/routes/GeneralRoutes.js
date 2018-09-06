const RouteHelper = require("../helpers/RouteHelpers");

function GeneralRoute(app) {
    /**
     * Pinging the server to check it's working
     */
    app.get("/ping", function(req, res) {
        RouteHelper.sendSuccess(res, new Date().getTime());
    });
}

module.exports = GeneralRoute;
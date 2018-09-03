const RouteHelper = require("../helpers/RouteHelpers");

/**
 * All these routes are todo
 *
 * Please check the AccountRoute for some pointers on what to use.
 *
 */
function EventRoute(app) {
    /**
     * Create an event as a user
     */
    app.post("/event", function (req, res) {

    });

    /**
     * Create an event as an organization
     */
    app.post("/organization/:ID/event", function (req, res) {

    });

    /**
     * Update an event
     */
    app.patch("/event/:ID", function(req, res){

    });
}

module.exports = EventRoute;
const RouteHelper = require("../helpers/RouteHelpers");

/**
 * All these routes are todo
 *
 * Please check the AccountRoute for some pointers on what to use.
 *
 */
function OrganizationRoute(app) {
    /**
     * Create an organization
     */
    app.post("/organization", function (req, res) {

    });

    /**
     * Updates an organization
     */
    app.patch("/organization/:ID", function (req, res) {

    });
}

module.exports = OrganizationRoute;
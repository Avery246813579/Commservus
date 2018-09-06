// Helpers
const RouteHelper = require("../helpers/RouteHelpers");
const AccountHelpers = require("../helpers/AccountHelpers");

// Validators
const validateSignupInput = require('../validation/signup');

function AccountRoute(app) {
    /**
     * Create an account
     */
    app.post("/signup", function (req, res) {
        const { errors, isValid } = validateSignupInput(req.body);

        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }

        console.log(`Errors: ${errors} - isValid: ${isValid}`);

        if (!RouteHelper.checkVariables(req, res, {
                FIRST_NAME: {MIN: 1, MAX: 35},
                LAST_NAME: {MIN: 1, MAX: 35},
                USERNAME: {MIN: 4, MAX: 16, TYPE: "LNU"},
                EMAIL: {MIN: 1, TYPE: "EMAIL"},
                PASSWORD: {MIN: 5}
            })) {
            return;
        }

        AccountHelpers.createAccount(req.body, function(aErr, aPayload) {
            if (aErr) {
                RouteHelper.sendError(res, aErr);
                return;
            }

            RouteHelper.sendSuccess(res);
        });
    });

    /**
     * Logs into an account
     */
    app.post("/login", function (req, res) {

    });

    /**
     * Updates an account
     */
    app.patch("/account", function (req, res) {

    });
}

module.exports = AccountRoute;
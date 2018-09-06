let prototype = module.exports;

// Tables
const Accounts = require("../tables/account/Accounts");
const Passwords = require("../tables/account/Passwords");
const Info = require("../tables/account/Info");

// Util
const Util = require("../util/Util");

/**
 * Creates an account and surrounding info
 *
 * @param body      {FIRST_NAME, LAST_NAME, USERNAME, EMAIL, PASSWORD}
 * @param callback  (ERROR, {SID, CID})
 */
prototype.createAccount = function(body, callback) {
    Accounts.find([{USERNAME: body.USERNAME}, {EMAIL: body.EMAIL}], function (aErr, aRows) {
        if (aErr) {
            callback("INTERNAL_ERROR");
            return;
        }

        if (aRows.length > 0) {
            if (aRows[0]["EMAIL"] === body.EMAIL) {
                callback("ACCOUNT_EMAIL_TAKEN")
            } else {
                callback("ACCOUNT_USERNAME_TAKEN");
            }

            return;
        }

        Accounts.insert({
            FIRST_NAME: body.FIRST_NAME,
            LAST_NAME: body.LAST_NAME,
            USERNAME: body.USERNAME,
            EMAIL: body.EMAIL
        }, function (iErr, iRow) {
            if (iErr) {
                callback("INTERNAL_ERROR");
                return;
            }

            let currentTime = new Date().getTime();
            Info.insert({ACCOUNT_ID: iRow, DATE_CREATED: currentTime, DATE_UPDATED: currentTime}, function (inErr) {
            });

            let SALT = Util.randomString(32);
            let PASSWORD = require('crypto').createHash('sha512').update(body['PASSWORD'] + SALT).digest('hex').toUpperCase();
            Passwords.insert({ACCOUNT_ID: iRow, CONTENT: PASSWORD, SALT: SALT}, function(pErr) {});

            callback(undefined, {});
        });
    });
};
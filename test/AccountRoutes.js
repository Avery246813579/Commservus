/** Imports **/
const chai = require('chai');
const expect = chai.expect;

require("../src/tables/TableHandler")();

/** Helpers **/
const AccountHelpers = require("../src/helpers/AccountHelpers");

/** Accounts **/
const Accounts = require("../src/tables/account/Accounts");

describe("Testing Account Routes", function () {
    describe("Checking creating accounts", function () {
        it("should create an account without errors", function (done) {
            // Delete the data
            Accounts.delete({USERNAME: "TestUser"}, function (aErr) {
                AccountHelpers.createAccount({
                    FIRST_NAME: "Test",
                    LAST_NAME: "User",
                    USERNAME: "TestUser",
                    EMAIL: "TestEmail@gmail.com",
                    PASSWORD: "asdfghjkl"
                }, function (aErr, aPayload) {
                    expect(typeof aErr).to.equal("undefined");

                    done();
                });
            });
        });

        it("should give a ACCOUNT_USERNAME_TAKEN error", function (done) {
            AccountHelpers.createAccount({
                FIRST_NAME: "Test",
                LAST_NAME: "User",
                USERNAME: "asdfd",
                EMAIL: "TestEmail@gmail.com",
                PASSWORD: "asdfghjkl"
            }, function (aErr, aPayload) {
                expect(aErr).to.equal("ACCOUNT_USERNAME_TAKEN");

                done();
            });
        });

        it("should give a ACCOUNT_USERNAME_TAKEN error", function (done) {
            AccountHelpers.createAccount({
                FIRST_NAME: "Test",
                LAST_NAME: "User",
                USERNAME: "blah123",
                EMAIL: "dog@gmail.com",
                PASSWORD: "asdfghjkl"
            }, function (aErr, aPayload) {
                expect(aErr).to.equal("ACCOUNT_EMAIL_TAKEN");

                done();
            });
        });
    });
});
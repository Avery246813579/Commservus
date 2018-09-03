var JSSQL = require('jssql');
var Scheme = JSSQL.Scheme;
var Table = JSSQL.Table;

module.exports = new Table('Event_Members', new Scheme({
    ID: {
        TYPE: "INT",
        AI: true,
        INDEX: "PRIMARY KEY",
        NULL: false
    },
    ACCOUNT_ID: {
        TYPE: "INT",
        NULL: false,
        FOREIGN: {
            key: "ID",
            table: "Accounts",
            onDelete: "CASCADE"
        }
    },
    EVENT_ID: {
        TYPE: "INT",
        NULL: false,
        FOREIGN: {
            key: "ID",
            table: "Events",
            onDelete: "CASCADE"
        }
    },
    DATE_START: {
        TYPE: "BIGINT",
        LENGTH: 16,
        NULL: false
    },
    DATE_END: {
        TYPE: "BIGINT",
        LENGTH: 16,
        NULL: false
    },
    SIGNED_ID: {
        TYPE: "INT",
        NULL: false,
        FOREIGN: {
            key: "ID",
            table: "Accounts",
            onDelete: "CASCADE"
        }
    },
    DATE_SIGNED: {
        TYPE: "BIGINT",
        LENGTH: 16,
        NULL: false
    }
}));
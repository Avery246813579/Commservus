var JSSQL = require('jssql');
var Scheme = JSSQL.Scheme;
var Table = JSSQL.Table;

module.exports = new Table('Info', new Scheme({
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
    DATE_CREATED: {
        TYPE: "BIGINT",
        LENGTH: 16,
        NULL: true
    },
    DATE_UPDATED: {
        TYPE: "BIGINT",
        LENGTH: 16,
        NULL: true
    },
    DATE_BIRTH: {
        TYPE: "BIGINT",
        LENGTH: 16,
        NULL: true
    }
}));
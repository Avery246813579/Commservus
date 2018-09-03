var JSSQL = require('jssql');
var Scheme = JSSQL.Scheme;
var Table = JSSQL.Table;

module.exports = new Table('Organization_Members', new Scheme({
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
    ORGANIZATION_ID: {
        TYPE: "INT",
        NULL: false,
        FOREIGN: {
            key: "ID",
            table: "Organizations",
            onDelete: "CASCADE"
        }
    },
    DATE_JOINED: {
        TYPE: "BIGINT",
        LENGTH: 16,
        NULL: false
    },
    ADMIN: {
        TYPE: "TINYINT",
        LENGTH: 1,
        NULL: false
    }
}));
var JSSQL = require('jssql');
var Scheme = JSSQL.Scheme;
var Table = JSSQL.Table;

module.exports = new Table('Organizations', new Scheme({
    ID: {
        TYPE: "INT",
        AI: true,
        INDEX: "PRIMARY KEY",
        NULL: false
    },
    NAME: {
        TYPE: "VARCHAR",
        NULL: false,
        LENGTH: 64
    },
    USERNAME: {
        TYPE: "VARCHAR",
        NULL: false,
        LENGTH: 16
    },
    DESCRIPTION: {
        TYPE: "TEXT",
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
        NULL: false
    },
    TYPE: {
        TYPE: "TINYINT",
        LENGTH: 1,
        NULL: false
    }
}));
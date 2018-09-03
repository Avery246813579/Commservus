var JSSQL = require('jssql');
var Scheme = JSSQL.Scheme;
var Table = JSSQL.Table;

module.exports = new Table('Events', new Scheme({
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
    LOCATION: {
        TYPE: "VARCHAR",
        NULL: false,
        LENGTH: 128
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
    ORGANIZATION_ID: {
        TYPE: "INT",
        NULL: false,
        FOREIGN: {
            key: "ID",
            table: "Organizations",
            onDelete: "CASCADE"
        }
    },
    DATE_CANCELLED: {
        TYPE: "BIGINT",
        LENGTH: 16,
        NULL: false
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
    TAGS: {
        TYPE: "VARCHAR",
        LENGTH: 128,
        NULL: false
    }
}));
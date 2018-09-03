var JSSQL = require('jssql');
var Scheme = JSSQL.Scheme;
var Table = JSSQL.Table;

module.exports = new Table('Sessions', new Scheme({
    ID: {
        TYPE: "INT",
        AI: true,
        INDEX: "PRIMARY KEY",
        NULL: false
    },
    UNIQUE_ID: {
        TYPE: "VARCHAR",
        NULL: false,
        LENGTH: 64
    },
    LAST_NAME: {
        TYPE: "VARCHAR",
        NULL: false,
        LENGTH: 35
    },
    USERNAME: {
        TYPE: "VARCHAR",
        NULL: false,
        LENGTH: 16
    },
    EMAIL: {
        TYPE: "VARCHAR",
        NULL: false,
        LENGTH: 255
    }
}));
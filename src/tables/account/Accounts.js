var JSSQL = require('jssql');
var Scheme = JSSQL.Scheme;
var Table = JSSQL.Table;

module.exports = new Table('Accounts', new Scheme({
    ID: {
        TYPE: "INT",
        AI: true,
        INDEX: "PRIMARY KEY",
        NULL: false
    },
    FIRST_NAME: {
        TYPE: "VARCHAR",
        NULL: false,
        LENGTH: 35
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
        LENGTH: 254
    },
    LOGO: {
        TYPE: "VARCHAR",
        LENGTH: 100
    }
}));
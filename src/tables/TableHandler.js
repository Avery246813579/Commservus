const Database = require('jssql').Database;
const Logger = require("./../util/Logger");

function TableHandler() {

    var _Database, _Database2;
    if (typeof process.env.RDS_HOSTNAME == "undefined") {
        _Database = new Database({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'Commservus'
        });

        Logger.log("We are running off local")
    } else {
        _Database = new Database({
            host: process.env.RDS_HOSTNAME,
            user: process.env.RDS_USERNAME,
            password: process.env.RDS_PASSWORD,
            database: process.env.RDS_DB_NAME
        });

        Logger.log("We are running off AWS")
    }

    _Database.table([
        /** Accounts */
        require('./account/Accounts'),
        require('./account/Passwords'),
        require('./account/Info'),

        /** Organizations */
        require('./organization/Organizations'),
        require('./organization/Organization_Members'),

        /** Events */
        require('./event/Events'),
        require('./event/Event_Members')
    ]);
}

module.exports = TableHandler;
'use strict';

const app = require("express")();
const bodyParser = require('body-parser');
const Logger = require("./util/Logger");

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Credentials", "true");

    next();
});

/**
 * We won't crash the app if we hit an exception
 */
process.on('uncaughtException', function (err) {
    console.log("-=- Node Critical Error Start -=-");
    console.dir(err.stack);
    console.log("-=- Node Critical Error End -=-");
});

require("./routes/index")(app);
require("./tables/TableHandler")();

app.listen(3001, function(){
    Logger.log("Commservus has started up successfully");
});
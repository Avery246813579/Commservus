let prototype = module.exports;

let crypto = require("crypto");

prototype.randomString = function (howMany, chars) {
    chars = chars
        || "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
    let rnd = crypto.randomBytes(howMany)
        , value = new Array(howMany)
        , len = chars.length;

    for (let i = 0; i < howMany; i++) {
        value[i] = chars[rnd[i] % len]
    }

    return value.join('');
};


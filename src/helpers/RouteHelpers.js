const Errors = require('./../util/Errors');

let prototype = module.exports;

prototype.sendError = function (res, err, data) {
    let error = Errors[err];

    if (typeof err === "undefined") {
        error = Errors.INTERNAL_ERROR;
    }

    let payload = {
        success: false,
        message: error.MESSAGE,
        code: error.CODE,
    };

    if (typeof data !== "undefined") {
        payload.data = data;
    }

    res.status(200).json(payload);
};

prototype.sendSuccess = function (res, data) {
    if (typeof data !== "undefined") {
        res.status(200).json({
            success: true,
            data: data
        });

        return;
    }

    res.status(200).json({
        success: true
    });
};

/**
 * Checks body variables
 *
 * @param req       Request
 * @param info      Info we want to check on
 * @param content   Can change the dict we are looking at
 */
prototype.checkVariables = function (req, info, content) {
    let body = req.body;

    if (typeof content !== "undefined") {
        body = content;
    }

    for (let key in info) {
        if (!info.hasOwnProperty(key)) {
            return false;
        }

        if (typeof body[key] === "undefined") {
            prototype.sendError(res, "BODY_ARGUMENT_MISSING", {
                ARG: key
            });

            return false;
        }

        let keyInfo = info[key];
        let keyValue = body[key];

        if (typeof keyInfo.TYPE !== "undefined" && !prototype.isSpecificType(keyValue, keyInfo.TYPE)) {
            prototype.sendError(res, "BODY_ARGUMENT_INVALID_TYPE", {
               ARG: key,
               TYPE: keyInfo.TYPE
            });

            return false;
        }

        if (!isNaN(keyValue)) {
            keyValue = keyValue.toString();
        }

        if (typeof keyInfo.MIN !== "undefined" && keyValue.length < keyInfo.MIN) {
            prototype.sendError(res, "BODY_ARGUMENT_INVALID_TYPE", {
                ARG: key,
                LENGTH: "<=" + keyInfo.MIN
            });

            return false;
        }

        if (typeof keyInfo.MAX !== "undefined" && keyValue.length > keyInfo.MAX) {
            prototype.sendError(res, "BODY_ARGUMENT_INVALID_TYPE", {
                ARG: key,
                LENGTH: ">=" + keyInfo.MAX
            });

            return false;
        }

        if (typeof keyInfo.LENGTH !== "undefined" && keyValue.length !== keyInfo.LENGTH) {
            prototype.sendError(res, "BODY_ARGUMENT_INVALID_TYPE", {
                ARG: key,
                LENGTH: ">=" + keyInfo.LENGTH
            });

            return false;
        }
    }

    return true;
};

/**
 * Check if a variable is a specific type
 *
 * @param variable          The variable in question
 * @param type              The specific type
 */
prototype.isSpecificType = function (variable, type) {
    switch (type.toUpperCase()) {
        case "EMAIL":
            if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(variable))
                return true;

            break;
        case "LNU":
            if (/^\w+$/.test(variable) && variable.charAt(0) != "_")
                return true;

            break;
        case "UNICODE":
            //TODO Actually check this. We assume it's true, this will definitely come to haunt me.
            return true;
        case "NUMBER":
            return !isNaN(variable);
        case "DATE":
            try {
                Util.parseTime(variable);
                return true;
            } catch (e) {
                return false;
            }
    }

    return false;
};


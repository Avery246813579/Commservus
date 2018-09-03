let prototype = module.exports;

prototype.INTERNAL_ERROR = {
    MESSAGE: "Internal error found",
    CODE: 1
};

prototype.BODY_ARGUMENT_MISSING = {
    MESSAGE: "An argument is missing in the body",
    CODE: 2
};

prototype.BODY_ARGUMENT_INVALID_TYPE = {
    MESSAGE: "An argument is not a specific type",
    CODE: 3
};

prototype.BODY_ARGUMENT_INVALID_LENGTH = {
    MESSAGE: "An argument is not a specific length",
    CODE: 4
};
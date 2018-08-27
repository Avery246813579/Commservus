var prototype = module.exports;

prototype.sendSuccess = function(res, data) {
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
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var apiRoute_1 = __importDefault(require("./routes/apiRoute"));
var authRoute_1 = __importDefault(require("./routes/authRoute"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1["default"])();
var PORT = 3000;
app.use((0, cors_1["default"])({ origin: 'http://localhost:8080' }));
app.use(express_1["default"].json());
app.use(authRoute_1["default"]);
app.use('/api', apiRoute_1["default"]);
app.use(function (err, req, res, next) {
    var error = {
        message: "Global Express Error Handler",
        status: 400,
        log: 'express error check the server log'
    };
    console.log(err);
    err = Object.assign({}, error, err);
    res.status(err.status).send(err.log);
});
app.listen(PORT, function () { return [
    console.log("listening to ".concat(PORT, "..."))
]; });
//# sourceMappingURL=server.js.map
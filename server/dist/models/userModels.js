"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var pg_1 = require("pg");
var keys_1 = __importDefault(require("../keys"));
var connectionString = keys_1["default"].connectionString;
console.log("connection string", connectionString);
var pool = new pg_1.Pool({
    connectionString: connectionString
});
var db = {
    query: function (text, params, callback) {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};
exports["default"] = db;
//# sourceMappingURL=userModels.js.map
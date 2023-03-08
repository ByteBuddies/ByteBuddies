"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var userModels_1 = __importDefault(require("../models/userModels"));
exports["default"] = {
    createUser: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var command, _a, username, email, password, response, _b, _c, _d, err_1, error;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 3, , 4]);
                    command = "INSERT INTO Bytes (username, email, password, profile_id) VALUES ($1, $2, $3, '1' )";
                    _a = res.locals.newUser, username = _a.username, email = _a.email, password = _a.password;
                    return [4, userModels_1["default"].query(command, [username, email, password])];
                case 1:
                    response = _e.sent();
                    _c = (_b = console).log;
                    _d = ["response"];
                    return [4, response];
                case 2:
                    _c.apply(_b, _d.concat([_e.sent()]));
                    return [2, next()];
                case 3:
                    err_1 = _e.sent();
                    console.log(err_1);
                    error = {
                        message: "/controllers/dbController createUser error ".concat(typeof err_1 === 'object' ? JSON.stringify(err_1) : err_1),
                        status: 500,
                        log: 'database error check server log'
                    };
                    return [2, next(error)];
                case 4: return [2];
            }
        });
    }); },
    getUser: function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var username, command, user, err_2, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    username = req.body.username;
                    command = "SELECT b.username, b.email p.* FROM bytes b INNER JOIN profile p ON p.profile_id=b.profile_id WHERE b.username=$1";
                    return [4, userModels_1["default"].query(command, [username])];
                case 1:
                    user = _a.sent();
                    res.locals.user = user;
                    return [2, next()];
                case 2:
                    err_2 = _a.sent();
                    error = {
                        message: "/controllers/dbController getUser error ".concat(typeof err_2 === 'object' ? JSON.stringify(err_2) : err_2),
                        status: 500,
                        log: 'database error check server log'
                    };
                    return [2, next(error)];
                case 3: return [2];
            }
        });
    }); }
};
//# sourceMappingURL=userController.js.map
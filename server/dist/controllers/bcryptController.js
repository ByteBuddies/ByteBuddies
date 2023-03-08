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
var bcrypt_1 = __importDefault(require("bcrypt"));
var auth_1 = require("../service/auth");
exports["default"] = {
    hashPassword: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, username, password, email, salt, hashedPassword, err_1, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("hash");
                        _a = req.body, username = _a.username, password = _a.password, email = _a.email;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4, bcrypt_1["default"].genSalt(3)];
                    case 2:
                        salt = _b.sent();
                        return [4, bcrypt_1["default"].hash(password, salt)];
                    case 3:
                        hashedPassword = _b.sent();
                        res.locals.newUser = { username: username, password: hashedPassword, email: email };
                        return [2, next()];
                    case 4:
                        err_1 = _b.sent();
                        error = {
                            message: "/controllers/bcryptController hashPassword error ".concat(typeof err_1 === 'object' ? JSON.stringify(err_1) : err_1),
                            status: 400,
                            log: 'server error check server log'
                        };
                        return [2, next(error)];
                    case 5: return [2];
                }
            });
        });
    },
    login: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, user, err_2, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, email = _a.email, password = _a.password;
                        if (!email || !password) {
                            return [2, res.status(400).json('incorrect input')];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        if (!req.session.authenticated) return [3, 2];
                        console.log('here');
                        return [3, 4];
                    case 2: return [4, (0, auth_1.login)(email, password)];
                    case 3:
                        user = _b.sent();
                        req.session.authenticated = true;
                        req.session.user = user;
                        return [2, next()];
                    case 4: return [3, 6];
                    case 5:
                        err_2 = _b.sent();
                        error = {
                            message: "/controllers/bcryptController login error ".concat(typeof err_2 === 'object' ? JSON.stringify(err_2) : err_2),
                            status: 400,
                            log: 'server error check server log'
                        };
                        return [2, next(error)];
                    case 6: return [2];
                }
            });
        });
    },
    authenticate: function (req, res, next) {
        if (!req.session || !req.session.user) {
            var err = {
                message: "/controllers/bcryptController authentication error",
                status: 400,
                log: 'server error check server log'
            };
            return next(err);
        }
        else {
            req.session.regenerate(function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log('session regenerated');
                }
            });
        }
        console.log(req.session);
        return next();
    }
};
//# sourceMappingURL=bcryptController.js.map
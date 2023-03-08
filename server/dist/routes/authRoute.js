"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_session_1 = __importDefault(require("express-session"));
var express_1 = require("express");
var bcryptController_1 = __importDefault(require("../controllers/bcryptController"));
var userController_1 = __importDefault(require("../controllers/userController"));
var router = (0, express_1.Router)();
router.use((0, express_session_1["default"])({
    secret: 'bytebuddies',
    cookie: { maxAge: 6000 },
    rolling: true,
    resave: true,
    saveUninitialized: false
}));
router.post('/api/login', bcryptController_1["default"].login, function (req, res) {
    return res.redirect('http://localhost:8080/main');
});
router.post('/api/signup', bcryptController_1["default"].hashPassword, userController_1["default"].createUser, function (req, res) {
    return res.json('created');
});
router.use(bcryptController_1["default"].authenticate);
router.use(function (req, res) {
    res.json(req.session.cookie);
});
exports["default"] = router;
//# sourceMappingURL=authRoute.js.map
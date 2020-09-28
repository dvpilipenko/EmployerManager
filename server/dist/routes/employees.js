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
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const employee_1 = require("../schemas/employee");
const utils_1 = require("../models/utils");
exports.register = (app, basePath) => {
    const employeePath = "employee";
    app.get(`${basePath}/${employeePath}/:page/:limit`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const limit = Number(req.params.limit);
        const skip = Number(req.params.page) * limit;
        const condition = utils_1.getQueryCondition(req.query);
        const employees = yield employee_1.employeeModel
            .find(condition)
            .sort('firstName')
            .sort('lastName')
            .skip(skip)
            .limit(limit);
        const count = yield employee_1.employeeModel.find(condition).countDocuments();
        const result = { count, data: employees };
        res.send(result);
    }));
    app.post(`${basePath}/${employeePath}`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield employee_1.employeeModel.create(req.body);
        res.send();
    }));
    app.put(`${basePath}/${employeePath}`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const doc = yield employee_1.employeeModel.findOne({ _id: req.body._id });
        doc.overwrite(Object.assign({}, req.body));
        doc.save();
        res.send();
    }));
    app.delete(`${basePath}/${employeePath}/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield employee_1.employeeModel.deleteOne({ _id: req.params.id });
        res.send();
    }));
};
//# sourceMappingURL=employees.js.map
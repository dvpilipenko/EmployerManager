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
const tag_1 = require("../schemas/tag");
exports.register = (app, basePath) => {
    const tagsPath = "tag";
    app.get(`${basePath}/${tagsPath}`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const tags = yield tag_1.tagModel.find({}, (err, docs) => {
            if (err)
                return console.log(err);
        });
        res.send(tags);
    }));
    app.post(`${basePath}/${tagsPath}`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield tag_1.tagModel.create(req.body);
        res.send();
    }));
    app.delete(`${basePath}/${tagsPath}/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield tag_1.tagModel.deleteOne({ _id: req.params.id });
        res.send();
    }));
};
//# sourceMappingURL=tags.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryCondition = exports.getRegExpForName = void 0;
exports.getRegExpForName = (name) => ({
    $expr: {
        $regexMatch: {
            input: { $concat: ["$firstName", " ", "$lastName"] },
            regex: `${name}`,
            options: "i",
        },
    },
});
exports.getQueryCondition = (params) => {
    const result = [];
    if (params.name) {
        result.push(exports.getRegExpForName(params.name));
    }
    if (params.office) {
        result.push({ office: params.office });
    }
    return result.length ? { $and: result } : {};
};
//# sourceMappingURL=utils.js.map
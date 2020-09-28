import {QueryParams} from "./models";

export const getRegExpForName = (name: string) => ({
    $expr: {
        $regexMatch: {
            input: { $concat: ["$firstName", " ", "$lastName"] },
            regex: `${name}`,
            options: "i",
        },
    },
});

export const getQueryCondition = (params: QueryParams) => {
    const result = [];
    if (params.name) {
        result.push(getRegExpForName(params.name));
    }
    if (params.office) {
        result.push({ office: params.office });
    }
    return result.length ? { $and: result } : {};
};

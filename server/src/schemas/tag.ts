import { Schema } from "mongoose";
import * as mongoose from "mongoose";

export const tagScheme = new Schema(
    {
        value: String,
    },
    { versionKey: false }
);

export const tagModel = mongoose.model("tag", tagScheme);

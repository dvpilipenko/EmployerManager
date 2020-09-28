import { Schema } from "mongoose";
import * as mongoose from "mongoose";

export const employeeScheme = new Schema(
  {
    firstName: String,
    lastName: String,
    office: String,
    birthDate: Date,
    phone: String,
    tags: Array,
  },
  { versionKey: false }
);

export const employeeModel = mongoose.model("employee", employeeScheme);

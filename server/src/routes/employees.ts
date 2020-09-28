import * as express from "express";
import { employeeModel } from "../schemas/employee";
import { IEmployeeResponse, QueryParams } from "../models/models";
import { getQueryCondition } from "../models/utils";

export const register = (app: express.Application, basePath: string) => {
  const employeePath = "employee";

  app.get(`${basePath}/${employeePath}/:page/:limit`, async (req: any, res) => {
    const limit = Number(req.params.limit);
    const skip = Number(req.params.page) * limit;
    const condition = getQueryCondition(req.query as QueryParams);

    const employees = await employeeModel
      .find(condition)
        .sort('firstName')
        .sort('lastName')
      .skip(skip)
      .limit(limit);

    const count = await employeeModel.find(condition).countDocuments();

    const result: IEmployeeResponse = { count, data: employees };
    res.send(result);
  });

  app.post(`${basePath}/${employeePath}`, async (req: any, res) => {
    await employeeModel.create(req.body);
    res.send();
  });

  app.put(`${basePath}/${employeePath}`, async (req: any, res) => {
    const doc = await employeeModel.findOne({ _id: req.body._id });
    doc.overwrite({ ...req.body });
    doc.save();
    res.send();
  });

  app.delete(`${basePath}/${employeePath}/:id`, async (req: any, res) => {
    await employeeModel.deleteOne({ _id: req.params.id });
    res.send();
  });
};

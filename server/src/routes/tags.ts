import * as express from "express";
import { tagModel } from "../schemas/tag";

export const register = (app: express.Application, basePath: string) => {
  const tagsPath = "tag";

  app.get(`${basePath}/${tagsPath}`, async (req: any, res) => {
    const tags = await tagModel.find({}, (err, docs) => {
      if (err) return console.log(err);
    });
    res.send(tags);
  });

  app.post(`${basePath}/${tagsPath}`, async (req, res) => {
    await tagModel.create(req.body);
    res.send();
  });

  app.delete(`${basePath}/${tagsPath}/:id`, async (req: any, res) => {
    await tagModel.deleteOne({ _id: req.params.id });
    res.send();
  });
};

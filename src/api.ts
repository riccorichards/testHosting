import { Application, Request, Response } from "express";
import ServiceTest from "./service";
import TestRepo from "./repo";
import initializedRepo from "./initialize";

const api = (app: Application) => {
  const repo = new TestRepo(initializedRepo);
  const service = new ServiceTest(repo);

  app.post("/create", async (req: Request, res: Response) => {
    try {
      const newTest = await service.CreateTestService(req.body);

      return res.status(201).json(newTest);
    } catch (error) {
      return res.status(500).json({ msg: "Error" });
    }
  });

  app.get("/post", async (req: Request, res: Response) => {
    try {
      const posts = await service.ReturnPostsService();

      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ msg: "Error" });
    }
  });
};

export default api;

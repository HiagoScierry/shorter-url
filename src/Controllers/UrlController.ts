import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { BasicController } from "./BasicController";

class UrlController extends BasicController {
  index(request: Request, response: Response): Response {
    return response.json([]);
  }
  show(request: Request, response: Response): Response {
    const { code } = request.params as ParamsDictionary & ParsedQs;
    return response.json({ code });
  }
  store(request: Request, response: Response): Response {
    const { url } = request.body;
    return response.json({ url });
  }
}

export default new UrlController();

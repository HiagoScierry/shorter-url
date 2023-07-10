import { Request, Response } from "express";

export abstract class BasicController {
  abstract index(request: Request, response: Response): Response;
  abstract show(request: Request, response: Response): Response;
  abstract store(request: Request, response: Response): Response;
}

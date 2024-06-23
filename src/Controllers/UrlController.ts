import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IndexUrlUseCase } from "@/UseCase/IndexUrlUseCase";
import { ShowUrlUseCase } from "@/UseCase/ShowUrlUseCase";
import { StoreUrlUseCase } from "@/UseCase/StoreUrlUseCase";
import { PrismaUrlRepository } from "@/Repository/Prisma/PrismaUrlRepository";

export default class UrlController {
  async index(request: Request, response: Response) {
    const urlRepository = new PrismaUrlRepository();

    const indexUrlUseCase = new IndexUrlUseCase(urlRepository);

    const data = await indexUrlUseCase.execute();

    return response.json(data);
  }

  async show(request: Request, response: Response) {
    const { code } = request.params as ParamsDictionary & ParsedQs;

    const urlRepository = new PrismaUrlRepository();

    const showUrlUseCase = new ShowUrlUseCase(urlRepository);

    const storageUrl = await showUrlUseCase.execute(code);

    if (!storageUrl)
      return response.status(404).json({ error: "Url not found" });

    return response.redirect(storageUrl.url);
  }
  async store(request: Request, response: Response) {
    const { url } = request.body;

    const urlRepository = new PrismaUrlRepository();

    const storeUrlUseCase = new StoreUrlUseCase(urlRepository);

    const id = await storeUrlUseCase.execute(url);

    return response.json({
      shortedUrl: `http://localhost:${process.env.PORT}/${id}`,
    });
  }
}

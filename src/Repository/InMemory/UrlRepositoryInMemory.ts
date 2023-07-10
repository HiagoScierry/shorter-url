import { IUrlRepository } from "../Interfaces/IUrlRepository";
import { Url } from "@prisma/client";

export class UrlRepositoryInMemory implements IUrlRepository {
  private urls: Url[] = [];

  async index(): Promise<Url[]> {
    return this.urls;
  }

  async show(code: string): Promise<Url | null> {
    return this.urls.find((url: Url) => url.id === code) || null;
  }

  async store(url: Url): Promise<string> {
    this.urls.push(url);

    return url.id;
  }
}

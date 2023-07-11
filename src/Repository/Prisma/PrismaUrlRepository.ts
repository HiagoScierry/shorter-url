import { IUrlRepository } from "../Interfaces/IUrlRepository";
import { PrismaClient, Url } from "@prisma/client";

const prisma = new PrismaClient();

export class PrismaUrlRepository implements IUrlRepository {
  async index(): Promise<Url[]> {
    return await prisma.url.findMany();
  }

  async show(code: string): Promise<Url | null> {
    return await prisma.url.findUnique({
      where: {
        id: code,
      },
    });
  }

  async store(url: Url): Promise<string> {
    const storageUrl = await prisma.url.create({
      data: url,
    });

    return storageUrl.id;
  }
}

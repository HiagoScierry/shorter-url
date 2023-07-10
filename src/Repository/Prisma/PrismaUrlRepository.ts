import { IUrlRepository } from "../Interfaces/IUrlRepository";
import { PrismaClient, Url } from "@prisma/client";

const prisma = new PrismaClient();

export class PrismaUrlRepository implements IUrlRepository {
  index(): Promise<Url[]> {
    return prisma.url.findMany();
  }
  show(code: string): Promise<Url | null> {
    throw new Error("Method not implemented.");
  }
  store(url: string): Promise<Url> {
    throw new Error("Method not implemented.");
  }
}

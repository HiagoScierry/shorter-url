import { IUrlRepository } from "../Interfaces/IUrlRepository";
import { Url } from "@prisma/client";

export class PrismaUrlRepository implements IUrlRepository {
  index(): Promise<Url[]> {
    throw new Error("Method not implemented.");
  }
  show(code: string): Promise<Url | null> {
    throw new Error("Method not implemented.");
  }
  store(url: string): Promise<Url> {
    throw new Error("Method not implemented.");
  }
}

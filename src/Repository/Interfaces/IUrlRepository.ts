import { Url } from "@prisma/client";

export interface IUrlRepository {
  index(): Promise<Url[]>;
  show(code: string): Promise<Url | null>;
  store(url: Url): Promise<string>;
}

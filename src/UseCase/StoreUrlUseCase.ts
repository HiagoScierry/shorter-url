import { IUrlRepository } from "@/Repository/Interfaces/IUrlRepository";
import { Url } from "@prisma/client";
import { randomBytes } from "crypto";

export class StoreUrlUseCase {
  private urlRepository: IUrlRepository;

  constructor(urlRepository: IUrlRepository) {
    this.urlRepository = urlRepository;
  }

  async execute(url: string): Promise<string> {
    const newUrlShortened: Url = {
      id: randomBytes(3).toString("hex"),
      url,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return this.urlRepository.store(newUrlShortened);
  }
}

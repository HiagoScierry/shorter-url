import { IUrlRepository } from "@/Repository/Interfaces/IUrlRepository";
import { Url } from "@prisma/client";

export class ShowUrlUseCase {
  private urlRepository: IUrlRepository;

  constructor(urlRepository: IUrlRepository) {
    this.urlRepository = urlRepository;
  }
  async execute(code: string): Promise<Url | null> {
    return this.urlRepository.show(code);
  }
}

import { IUrlRepository } from "@/Repository/Interfaces/IUrlRepository";
import { Url } from "@prisma/client";

export class IndexUrlUseCase {
  private urlRepository: IUrlRepository;

  constructor(urlRepository: IUrlRepository) {
    this.urlRepository = urlRepository;
  }

  async execute(): Promise<Url[]> {
    return this.urlRepository.index();
  }
}

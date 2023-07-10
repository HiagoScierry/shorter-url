import { IndexUrlUseCase } from "../../../src/UseCase/IndexUrlUseCase";
import { UrlRepositoryInMemory } from "../../../src/Repository/InMemory/UrlRepositoryInMemory";
import { IUrlRepository } from "../../../src/Repository/Interfaces/IUrlRepository";
import { Url } from "@prisma/client";
import { randomBytes } from "crypto";

describe("indexUrlUseCase", () => {
  let indexUrlUseCase: IndexUrlUseCase;
  let urlRepository: IUrlRepository;

  beforeEach(() => {
    urlRepository = new UrlRepositoryInMemory();
    indexUrlUseCase = new IndexUrlUseCase(urlRepository);
  });

  it("should be return service if repository is empty", async () => {
    const response = await indexUrlUseCase.execute();

    expect(response).toEqual([]);
  });

  it("should be able to index service with one url", async () => {
    const newUrlShortened: Url = {
      id: randomBytes(3).toString("hex"),
      url: "https://www.google.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    urlRepository.store(newUrlShortened);

    const response = await indexUrlUseCase.execute();
    expect(response).toEqual([newUrlShortened]);
  });
});

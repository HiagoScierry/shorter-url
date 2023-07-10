import { UrlRepositoryInMemory } from "../../../src/Repository/InMemory/UrlRepositoryInMemory";
import { IUrlRepository } from "../../../src/Repository/Interfaces/IUrlRepository";
import { ShowUrlUseCase } from "../../../src/UseCase/ShowUrlUseCase";

describe("showUrlUseCase", () => {
  let showUrlUseCase: ShowUrlUseCase;
  let urlRepository: IUrlRepository;

  beforeEach(() => {
    urlRepository = new UrlRepositoryInMemory();
    showUrlUseCase = new ShowUrlUseCase(urlRepository);
  });

  it("should be return null if dont exists url in database", async () => {
    const response = await showUrlUseCase.execute("123");
    expect(response).toBeNull();
  });

  it("should be able to show url", async () => {
    const newUrlShortened = {
      id: "123456",
      url: "https://www.google.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await urlRepository.store(newUrlShortened);
    await urlRepository.store(newUrlShortened);

    const response = await showUrlUseCase.execute("123456");
    expect(response).toEqual(newUrlShortened);
  });
});

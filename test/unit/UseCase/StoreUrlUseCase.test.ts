import { IUrlRepository } from "../../../src/Repository/Interfaces/IUrlRepository";
import { StoreUrlUseCase } from "../../../src/UseCase/StoreUrlUseCase";
import { UrlRepositoryInMemory } from "../../../src/Repository/InMemory/UrlRepositoryInMemory";

describe("storeUrlUseCase", () => {
  let storeUrlUseCase: StoreUrlUseCase;
  let urlRepository: IUrlRepository;

  beforeEach(() => {
    urlRepository = new UrlRepositoryInMemory();
    storeUrlUseCase = new StoreUrlUseCase(urlRepository);
  });

  it("should be return after create one shorted url", async () => {
    await storeUrlUseCase.execute("https://www.google.com");

    const sizeUrlRepository = await urlRepository.index();

    expect(sizeUrlRepository.length).toEqual(1);
    expect(sizeUrlRepository[0].url).toEqual("https://www.google.com");
    expect(sizeUrlRepository[0].id.length).toEqual(6);
  });

  it("should be return after create two shorted url with the same content return 2", async () => {
    await storeUrlUseCase.execute("https://www.google.com");
    await storeUrlUseCase.execute("https://www.google.com");

    const sizeUrlRepository = await urlRepository.index();

    expect(sizeUrlRepository.length).toEqual(2);
    expect(sizeUrlRepository[0].id).not.toEqual(sizeUrlRepository[1].id);
  });
});

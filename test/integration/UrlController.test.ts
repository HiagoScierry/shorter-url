import request from "supertest";
import { app } from "../../src/app";
import prisma from "../../src/Repository/database.access";
import { Url } from "@prisma/client";
import exp from "constants";

describe("UrlController (integration)", () => {

  beforeAll(async () => {
    await prisma.url.deleteMany();
  });


  describe("GET /", () => {
    afterEach(async () => {
      await prisma.url.deleteMany();
    });

    it("should return 200 OK", async () => {
      const response = await request(app).get("/");

      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });

    it("should return one url", async () => {
      const data: Url = {
        id: "123456",
        url: "https://www.google.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await prisma.url.create({
        data,
      });

      const response = await request(app).get("/");

      expect(response.status).toBe(200);
      expect(response.body.length).toEqual(1);
    });
  });

  describe("GET /:code", () => {
    afterEach(async () => {
      await prisma.url.deleteMany();
    });

    it("should return 404 Not Found", async () => {
      const response = await request(app).get("/123456");

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: "Url not found" });
    });

    it("should return 302 Found", async () => {
      const data: Url = {
        id: "123456",
        url: "https://www.google.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await prisma.url.create({
        data,
      });

      const response = await request(app).get("/123456");

      expect(response.status).toBe(302);
    });
  });

  describe("POST /", () => {
    afterEach(async () => {
      await prisma.url.deleteMany();
    });

    it("should return 200 OK", async () => {
      const url = "https://www.google.com";

      const response = await request(app).post("/").send({
        url,
      });

      const findFirst = await prisma.url.findFirst({
        where: {
          url,
        },
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("shortedUrl");
      expect(findFirst).not.toBeNull();
    });
  });
});

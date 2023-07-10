import UrlController from "@/Controllers/UrlController";
import express, { Request, Response } from "express";

const router = express.Router();

router.get("/heath-check", (request: Request, response: Response) => {
  response.json({
    message: "Server is running!",
  });
});

router.get("/", UrlController.index);
router.get("/:code", UrlController.show);
router.post("/", UrlController.store);

export { router };

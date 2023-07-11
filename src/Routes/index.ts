import UrlController from "@/Controllers/UrlController";
import express, { Request, Response } from "express";

const router = express.Router();

router.get("/heath-check", (request: Request, response: Response) => {
  response.json({
    message: "Server is running!",
  });
});

const urlController = new UrlController();

router.get("/", urlController.index);
router.get("/:code", urlController.show);
router.post("/", urlController.store);

export { router };

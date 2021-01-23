import express from "express";
const router = express.Router();
import { getPhotos , addPhoto } from "../controllers/getPhotos.js";
router.get("/", getPhotos);
router.post("/", addPhoto);

export default router;

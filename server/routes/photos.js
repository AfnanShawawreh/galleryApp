import express from "express";
import { getPhotos, addPhoto } from "../controllers/Photos.js";
const router = express.Router();

router.get("/", getPhotos);
router.post("/", addPhoto);

export default router;

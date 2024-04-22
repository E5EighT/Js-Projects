import { Router } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProductById,
  updateProductById,
} from "../controllers/products.controller.js";
import { isAdmin, isModerator, verifyToken } from "../middlewares/authJwt.js";
const router = Router();

router.get("/", getProducts);

router.get("/:ProductId", getProductById);

router.post("/", verifyToken, isModerator, createProduct);

router.put("/:ProductId", verifyToken, isAdmin, updateProductById);

router.delete("/:ProductId", verifyToken, isAdmin, deleteProductById);

export default router;

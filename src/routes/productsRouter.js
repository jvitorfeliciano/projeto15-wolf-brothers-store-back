import { Router } from "express";
import {
  getFilteredProducts,
  getProducts,
  getProductsByCategory,
  getSelectedProduct,
  postProduct,
} from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/products", getProducts);
productsRouter.get("/products/:idProduct", getSelectedProduct);
productsRouter.get("/products/filter/:name", getFilteredProducts);
productsRouter.post("/products", postProduct);
productsRouter.get("/products/category/:type", getProductsByCategory)
export default productsRouter;
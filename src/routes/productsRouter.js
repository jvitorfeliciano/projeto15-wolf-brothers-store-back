import { Router } from "express";
import { getFilteredProducts, getProducts } from "../controllers/productsController.js";


const productsRouter = Router();

productsRouter.get("/products",getProducts);


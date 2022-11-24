import { Router } from "express";
import { postProductToCart } from "../controllers/cartController.js";
import { authValidation } from "../middlewares/authValidationMiddleware.js";
import { productExistenceValidation } from "../middlewares/productExistenceValidationMiddleware.js";

const cartRouter = Router();
cartRouter.use(authValidation);
cartRouter.post(
  "/cart/add_product/:productId",
  productExistenceValidation,
  postProductToCart
);

export default cartRouter;

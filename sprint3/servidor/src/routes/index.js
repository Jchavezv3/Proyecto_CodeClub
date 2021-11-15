import express from "express";
import ProductsRoutes from "./ventas.js";
const router = express.Router();

router.get("/", (req, resp) => {
    resp.send("coneted to API");
});
router.use("/products",ProductsRoutes)

export default router;

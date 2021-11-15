import express from "express";
import { resourceLimits } from "worker_threads"
const router =express.Router();

let products = [
    {
        id: "1",
        name: "Product 1",
        description: "Description 1",
    },
    {
        id: "2",
        name: "Product 2",
        description: "Description 2",
    }
];

router.get("/", (req, resp) => {
    resp.json(products);
});

router.post("/add", (req, resp) => {
    products = [
        ...products,
        req.body,
    ];
    resp.json(products);
});

//atualizar id ventas
router.put("/update/:id", (req, resp) => {
    const { params:{ id }, body} = req;
    products = products.map(productItem => productItem.id === id ? body : productItem);
    resp.json(products);
});

//Borrar ventas 
router.delete("/remove/:id", (req, resp) => {
    const { params:{ id }} = req;
    products = products.filter(productItem => productItem.id !== id);
    resp.json(products);
})

export default router;
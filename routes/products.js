import express from 'express'
import Product from '../models/Product.js';
import { createError } from '../utils/error.js';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/product.js';
import { verifyAdmin } from '../utils/verifyToken.js';
// import { login, register } from '../controllers/auth.js'


const router = express.Router();

//CREACT
router.post("/", createProduct)


//UPDATE
router.put("/:id", verifyAdmin, updateProduct)

//DELETE
router.delete("/:id", verifyAdmin, deleteProduct)

//GET
router.get("/:id", getProduct)

//GET ALL
router.get("/", getProducts)

export default router
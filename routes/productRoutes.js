import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController } from '../controllers/productController.js'
import formidable from 'express-formidable'
const router=express.Router()

// routes
router.post('/create-product',requireSignIn,isAdmin, formidable() , createProductController)

// routes
router.put('/update-product/:pid',requireSignIn,isAdmin, formidable() , updateProductController)

// get Products
router.get('/get-product',getProductController);

// single product
router.get('/get-product/:slug',getSingleProductController); 

// get photo
router.get('/product-photo/:pid',productPhotoController)
  
// delete product
router.delete('/delete-product/:pid',deleteProductController)

// filter product
router.post('/product-filters',productFiltersController)

// productCount
router.get('/product-count',productCountController)

// productperpage
router.get('/product-list/:page',productListController)

// search product
router.get('/search/:keyword',searchProductController)

// similar product
router.get('/related-product/:pid/:cid',realtedProductController)

// category wise product
router.get('/product-category/:slug',productCategoryController)

// payment routes
router.get('/braintree/token',braintreeTokenController);

// payment
router.post('/braintree/payment',requireSignIn,brainTreePaymentController)

export default router 
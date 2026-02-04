import pool from '../config/database_mysql.js';


export const getProduct = async (req, res)=>{
    res.json({
        message: "getProduct success"
    })
}

export const getProductById = async (req, res)=>{
    const productId = req.query.id;

    res.json({
        message: "getProductById success",
        productId: productId
    })
}

export const getProductByCategory = async (req, res)=>{
    const category = req.query.category;
    res.json({
        message: "getProductByCategory success",
        category: category
    })
}

export const createProduct = async (req, res)=>{
    res.json({
        message: "createProduct success"
    })
}

export const updateProduct = async (req, res)=>{
    const productId = req.params.id;
    res.json({
        message: "updateProduct success",
        productId: productId
    })
}

export const deleteProduct = async (req, res)=>{
    const productId = req.params.id;
    res.json({
        message: "deleteProduct success",
        productId: productId
    })
}
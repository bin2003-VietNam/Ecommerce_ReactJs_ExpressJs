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


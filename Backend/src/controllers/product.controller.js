import pool from '../config/database_mysql.js';

export const getProduct = async (req, res)=>{
    try {
        const [productList] = await pool.execute(`
            SELECT *
            FROM products
            ORDER BY created_at DESC
            LIMIT 10
            `)
    res.status(200).json({
        message: "success to get product",
        productList: productList
    })
        
    } catch (error) {
        res.status(400).json({
            message: 'fail to get product'
        })
    }
}

export const getProductById = async (req, res)=>{
    const productId = req.query.id;

    try {
        const [rows] = await pool.execute(`
            SELECT *
            FROM products
            WHERE id=?
            `,[productId])
        console.log(rows);
        res.status(200).json({
            message: "success to get product by id",
            product: rows[0]
        })
    } catch (error) {
        res.status(400).json({
        message: 'fail to get product (by id)'
      })
    }
}

export const getProductByCategory = async (req, res)=>{
    const category = req.query.category;
    res.json({
        message: "getProductByCategory success",
        category: category
    })
}


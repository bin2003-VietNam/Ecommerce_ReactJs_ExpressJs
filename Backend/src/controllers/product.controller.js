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
            SELECT 
                p.id,
                p.category_id,
                p.name,
                p.slug,
                p.description,
                p.price,
                p.stock,
                p.thumbnail,
                p.is_featured,
                p.created_at,
                p.updated_at,
                JSON_ARRAYAGG(pi.image_url) AS image_url
            FROM products p
            LEFT JOIN product_images pi
                ON p.id = pi.product_id
            WHERE p.id = ?
            GROUP BY 
                p.id,
                p.category_id,
                p.name,
                p.slug,
                p.description,
                p.price,
                p.stock,
                p.thumbnail,
                p.is_featured,
                p.created_at,
                p.updated_at;
            `,[productId])
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
    const productCategoryId = req.query.category

    try {
    const [productList] = await pool.execute(`
        SELECT *
        FROM products
        WHERE category_id=?
        ORDER BY created_at DESC
        LIMIT 10
        `,[productCategoryId])
    res.status(200).json({
        message: "success to get product by category id",
        productList: productList
    })
} catch (error) {
    res.status(400).json({
    message: 'fail to get product (by id)'
    })
}

}


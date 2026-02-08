import pool from '../config/database_mysql.js';
import { 
  uploadImageToSuperbase,
  deleteImageFromSuperbase
 } from '../utils/supabase.util.js';

export const getAllOrder = async (req, res) => {
  res.json({
    message: "getAllOrder successfully",
  });
};

export const createProduct = async (req, res)=>{
   try {
    console.log(req.body);
    
    const {  
      category_id,
      name,
      slug,
      description,
      price, 
      stock,
      thumbnail,
      is_featured
    } = req.body
    if(!req.file){
      res.status(401).json({
      message: "There is no file"
     })
    }
    // insert product
    const imageUrl = await uploadImageToSuperbase(req.file)
    const [productResult] = await pool.execute(`
      INSERT INTO products
      (category_id, name, slug, description, price, stock, thumbnail, is_featured)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `, [parseInt(category_id), name, slug, description, price, stock, thumbnail, parseInt(is_featured)])
    // insert product_image
    const productId = productResult.insertId
    const [productImageResult] = await pool.execute(`
      INSERT INTO product_images
      (product_id, image_url)
      VALUES
      (?, ?)
      `,[parseInt(productId), imageUrl])
    if(productImageResult.rowsAffected ===0){
      return res.status(401).json({
        message: "failed to add product image"
      })
    }
    res.status(200).json({
      message: "createProduct success",
      imageUrl:imageUrl
    })
   } catch (error) {
    res.status(500).json({
      message: "error: " + error
    })
   }
}

export const updateProduct = async (req, res)=>{
  res.json({
      message: "updateProduct success"
  })
}

export const deleteProduct = async (req, res)=>{
  const {productId} = req.body;
  try {
    // delete product_image in supabase
    const [imageRows] = await pool.execute(`
      SELECT image_url 
      FROM product_images
      WHERE product_id=? 
      `, [productId])
    imageRows.map(async imageRow => {
      const relativePath = imageRow.image_url.split('/').pop();
      const result = await deleteImageFromSuperbase(relativePath)
      if(result == 0){
        console.log('delete successsfully');
      }else{
        console.log('fail to delete from supabase');
      }
    })
    // delete product in mysql
    const [result] = await pool.execute(`
      DELETE FROM products WHERE id=?;
      `, [productId])
    if(result.affectedRows ===0){
      return res.status(401).json({
        message: "failed to delete product"
      })
    }
    res.status(200).json({
      message: "success delete product"
    })
  } catch (error) {
    res.status(500).json({
      message: "error: " + error
    })
  }
}

export const createCategory = async (req, res)=>{
  const categoryName = req.body.name;
  try {
    const [rows] = await pool.query(`
      INSERT INTO categories
        (name)
      VALUE
        (?)
      `, [categoryName])
    if(rows.affectedRows ===0){
      return res.status(401).json({
        message: "failed to add category"
      })
    }
    res.status(200).json({
      message: "success add category"
    })
  } catch (error) {
    res.status(500).json({
      message: "error: " + error
    })
  }
}

export const updateCategory = async (req, res)=>{
    res.json({
        message: "updateCategory success"
    })
}

export const deleteCategory = async (req, res)=>{
  const categoryName = req.body.name;
  try {
    const [rows] = await pool.query(`
      DELETE FROM categories
        WHERE name=?
      `, [categoryName])
    if(rows.affectedRows ===0){
      return res.status(401).json({
        message: "failed to delete category"
      })
    }
    res.status(200).json({
      message: "success delete category"
    })
  } catch (error) {
    res.status(500).json({
      message: "error: " + error
    })
  }
}

export const changeOrderStatus = async (req, res) => {
  const orderId = req.query.OrderId;
  res.json({
    message: `changeOrderStatus  successfully`,
    orderId: orderId,
  });
};

export const getRevenueByDay = async (req, res) => {
  const type = req.query.type;
  res.json({
    message: `getRevenueByDay successfully`,
    type: type,
  });
};

export const getRevenueByMonth = async (req, res) => {
  const type = req.query.type;
  res.json({
    message: `getRevenueByMonth successfully`,
    type: type,
  });
};



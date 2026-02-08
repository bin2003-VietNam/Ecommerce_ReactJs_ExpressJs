import { supabase } from "../config/database_supabase.js";
import { v4 as uuidv4 } from "uuid";

export const uploadImageToSuperbase = async (file)=>{
    const filePath = `${file.originalname}`
    const {error} = await supabase
      .storage
      .from('product_image')
      .upload(filePath, file.buffer,{
        contentType: file.mimetype,
        upsert: false
      })
    if(error) throw error
    const {data} = supabase.storage.from('product_image').getPublicUrl(filePath)
    return data.publicUrl
}
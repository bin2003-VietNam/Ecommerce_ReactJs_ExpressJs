"use client";
import { useParams } from "next/navigation";

type ProductDetailProps = {
    params: {
        id: string
    }
}

const ProductDetail = () => {
  const params = useParams();
  return (
    <div>Product Detail param: {params.id}</div>
  )
}

export default ProductDetail
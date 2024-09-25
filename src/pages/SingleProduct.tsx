import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../redux/features/products/ProductsApi";


const SingleProduct = () => {
    const {id} = useParams();
    const {data,error,isLoading} = useGetSingleProductQuery(id)
    console.log(data.data)
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [detailProduct, setDetailProduct] = useState({});

  const getProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
      const findProduct = products.find(element => element.id === Number(id))
      resolve(findProduct)
    }, 2000)
  })

  useEffect(() => {
    getProduct
      .then((response) => {
        setDetailProduct(response)
      })
      .catch((error) => { console.log(error) })
  } )

  return (
    <div>
      <ItemDetail detail={detailProduct} />
    </div>

  )
}

export default ItemDetailContainer
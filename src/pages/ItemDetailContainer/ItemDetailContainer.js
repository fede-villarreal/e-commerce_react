import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [detailProduct, setDetailProduct] = useState({});

  useEffect(() => {
    const getProduct = () => {
      const dataBase = getFirestore();
      const querySnapshot = doc(dataBase, "products", id);
      getDoc(querySnapshot)
        .then((response) => {
          setDetailProduct({
            id: response.id,
            ...response.data(),
          })
        })
        .catch((error) => console.log(error));
    }
    
    getProduct();
  }, [id])

  return (
    <div>
      <ItemDetail detail={detailProduct} />
    </div>
  )
}

export default ItemDetailContainer
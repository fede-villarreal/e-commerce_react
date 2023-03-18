import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

export default function ItemListContainer() {

    const [productList, setProductList] = useState([]);

    const { categoryId } = useParams();


    useEffect(() => {
        const getProducts = () => {
            const dataBase = getFirestore();
            const queryBase = collection(dataBase, "products");
            const querySnapshot = categoryId
                ? query(queryBase, where("category", "==", categoryId))
                : queryBase;

            getDocs(querySnapshot)
                .then((response) => {
                    const list = response.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    })
                    setProductList(list);
                })
                .catch((error) => console.log(error))
        }

        getProducts();
    }, [categoryId]);

    return (
        <div>
            < ItemList productList={productList} />
        </div>
    )
}
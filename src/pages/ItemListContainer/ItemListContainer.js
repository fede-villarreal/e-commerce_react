import { products } from "../../data/products"
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer () {

    const [productList, setProductList] = useState([]);

    const { categoryId } = useParams();

    const getProducts = new Promise ((resolve, reject) => {
        if ( categoryId ) {
            const filteredProducts = products.filter( (element) => element.category === categoryId )
            setTimeout(() => {
                resolve(filteredProducts)
            }, 2000);
        } else {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        }
    });

    useEffect(() => {
        getProducts
            .then((response) => {
                setProductList(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [categoryId]);

    return (
        <div>
            < ItemList productList={productList} />
        </div>
    )
}
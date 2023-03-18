const Item = ({ product }) => {
    return (
    <div className="item">
        <img className="item__image" alt={product.title} src={`/multimedia/${product.image}`} />
        <h2>{product.title}</h2>
        <p>Price: ARS ${product.price}</p>
    </div>
    )
}

export default Item
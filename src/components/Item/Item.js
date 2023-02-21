const Item = ({ product }) => {
    return (
    <div className="item">
        <img className="item__image" alt={product.name} src={product.image} />
        <h2>{product.name}</h2>
        <p>Price: ARS ${product.price}</p>
    </div>
    )
}

export default Item
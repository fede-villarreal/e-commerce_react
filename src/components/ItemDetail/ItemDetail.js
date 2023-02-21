const ItemDetail = ({detail}) => {
    return (
        <div className="item">
            <img className="item__image" alt={detail.name} src={detail.image} />
            <h2>{detail.name}</h2>
            <p>Description: {detail.description}</p>
            <p>Stock: {detail.stock}</p>
            <p>Price: ARS ${detail.price}</p>
    </div>
    )
}

export default ItemDetail
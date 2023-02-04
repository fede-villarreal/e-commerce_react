import "./ItemListContainer.css"
export default function ItemListContainer ({greeting}) {
    return (
        <div>
            <h1 className="itemListContainer__titulo">{greeting}</h1>
        </div>
    )
}
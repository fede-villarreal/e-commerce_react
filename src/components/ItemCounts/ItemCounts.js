import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemCounts = ({stock}) => {

    const [counter, setCounter] = useState(0)

    let stockDisponible = stock;

    useEffect(() => {
        if(counter > stockDisponible){
            alert("La cantidad no puede superar el stock disponible")
            setCounter(stockDisponible)
        }
    }, [counter]);

    const onAdd = () => {
        setCounter(counter+1)
    }

    const onSubtract = () => {
        if(counter !== 0){
            setCounter(counter-1)
        }
    }

    return (
        <ButtonGroup aria-label="Button Counts">
            <Button className="countsButton" onClick={onSubtract} variant="secondary">-</Button>
            <p className="countsText" >{counter}</p>
            <Button className="countsButton" onClick={onAdd} variant="secondary">+</Button>
        </ButtonGroup>
    )
}

export default ItemCounts
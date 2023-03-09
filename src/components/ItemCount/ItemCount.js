import { useEffect } from "react"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemCount = ({stock, counter, setCounter}) => {

    useEffect(() => {
        if(counter > stock){
            alert("La cantidad no puede superar el stock disponible")
            setCounter(stock)
        }
    }, [stock, counter, setCounter]);

    const onAdd = () => {
        setCounter(counter+1)
    }

    const onSubtract = () => {
        if(counter !== 0){
            setCounter(counter-1)
        }
    }

    return (
        <ButtonGroup className="count" aria-label="Button Counts">
            <Button onClick={onSubtract} variant="secondary">-</Button>
            <p className="count__text" >{counter}</p>
            <Button onClick={onAdd} variant="secondary">+</Button>
        </ButtonGroup>
    )
}

export default ItemCount
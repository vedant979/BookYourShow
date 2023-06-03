
import "./Cards.css"
import  { useState } from 'react'
import { Modal } from '../Modal/Modal';
import { Button } from "../Button/Button";
export const Card = (props) => {
    const[modal, setModal] = useState(false);
    const handleClick = ()=>{
        setModal(!modal);
    }
  return (
   <>
        {
            modal && <Modal modal={modal} genre={props.genre}name={props.name} img={props.img} about={props.about}/>
        }
        <div className='card-items'>
            <img src={props.img} id='img'/>
            <p>{props.name}</p>
            <div onClick={handleClick}>
            <Button name={"View Details"}/>
            </div>
        </div>
    </>
  )
}

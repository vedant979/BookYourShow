import './Modal.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '../Button/Button';
import { modalClasses } from '@mui/base';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from '../../pages/Form/Form';
export const Modal = (props) => {
  const[closeModal, setCloseModal] = useState(true);
  const[form, setForm] = useState(false);
  const navigate = useNavigate();
  const handleClick = ()=>{
      setCloseModal (false);
  }
  const[data, setData] = useState({
    img:"",
    name:"",
    about:"",
    genre:""
  })
  useEffect(()=>{
    setData({
      img:`${props.img}`,
      name:`${props.name}`,
      about:`${props.about}`,
     genre:`${props.genre}`
    })

  },[])
  localStorage.setItem("data",JSON.stringify(data));

  return (
    <>
        { form &&
        
                (
                  <>
                  {console.log(props.img)}
                    <Form img={props.img}/>
                  </>
                )
        }
                {closeModal &&
                    (
                    <div className='modal-container'>
                        <div className='modal'>
                            <div className='modal-items-header'>
                            <span onClick={handleClick}>
                              <CloseIcon className='icon'/>
                            </span>
                              <div className='img-holder'>
                                <img id="background-img" src={props.img}></img>
                              </div>
                              <div className='content'>
                                <h3>{props.name}</h3>
                                <p>{props.about}</p>
                                <div className='btn-container'>
                                <Link to="/book">
                                  <span >
                                    <Button name={"Book Now"} />
                                  </span>
                                </Link>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                    )
                }
                
        </>
  )
}

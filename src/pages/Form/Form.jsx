import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button"
import "./Form.css";
import {Navbar} from "../../components/Navbar/Navbar"
export const Form = () => {
    const[details, setDetails] = useState({
        img:"",
        name:"",
        about:"",
        genre:""
    })
    const[formData, setFormData] = useState({
        fName:"",
        lName:"",
        pNumber:"",
        sNumber:"",
        date:""
    })
    useEffect(()=>{
        const obj = localStorage.getItem("data");
        setDetails(JSON.parse(obj));

    },[])
    const handleSubmit =(event)=>{
        event.preventDefault();
    }

    const handleChange = (event)=>{
        setFormData({...formData, [event.target.name] : `${event.target.value}`})
    }
    console.log(formData)
    const handleClicksubmit = ()=>{
        localStorage.setItem("customerData", JSON.stringify(formData));
    }
  return (
    <>
    <Navbar/>
    <div className="wrapper">
    <div className="header">
        <h2>Book Tickets for {details.name}</h2>
    </div>
    <div className="elem-container">
        <div className="movie-details">
            <div className="details-holder">
                <div className="img-img-holder">
                    <img className="img" src={`${details.img}`} alt="img"></img>
                </div>
                <p>{details.about}</p>
                <h3>{details.genre}</h3>
            </div>
        </div>

        <div className="booking-details">
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-item1">
                        <p className="para-text">First Name</p>
                        <input type="text" className="input-area" name="fName" onChange={handleChange} value={formData.fName}></input>
                </div>
                <div className="form-item2">
                    <p className="para-text">Last Name</p>
                    <input type="text" className="input-area" name="lName" onChange={handleChange} value={formData.lName}></input>
                </div>
                <div className="form-item3">
                    <p className="para-text">Phone Number</p>
                    <input type="text" className="input-area" name="pNumber"  onChange={handleChange} value={formData.pNumber}></input>
                </div>
                <div className="form-item4">
                    <p className="para-text">Seat Number</p>
                    <input type="text" className="input-area" name="sNumber" onChange={handleChange} value={formData.sNumber}></input>
                </div>
                <div className="form-item5">
                    <p className="para-text">Date</p>
                    <input type="date" className="input-area" name="date" onChange={handleChange} value={formData.date}></input>
                </div>
                <div className="btn-holder">
                <span onClick={handleClicksubmit}>
                    <Button name={"Book Now"}/>
                </span>
                </div>
            </form>
        </div>
    </div>
    </div>
    </>

  )
}

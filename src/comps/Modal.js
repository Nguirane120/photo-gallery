import React from 'react'
import './Modal.css'

const Modal = ({ selectedImg, setSlectedImg }) => {
    const handleClick = (e) =>{
        if(e.target.classList.contains('backdrop')){

            setSlectedImg(null)
        }
    }
  return (
    <div className="backdrop" onClick={handleClick}>
        <img src={selectedImg} alt="openmodal" />
    </div>
  )
}

export default Modal
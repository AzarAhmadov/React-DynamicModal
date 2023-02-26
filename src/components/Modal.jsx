import React from 'react'
import { AiOutlineClose } from "react-icons/ai"

export default function Modal({ modal, hide, img, title, dec }) {

    return (
        <div className={modal ? 'modal active' : "modal"} >
            <div className='modal-content'>
                <div className="icon">
                    <h3> {title} </h3>
                    <AiOutlineClose onClick={hide} className='close' />
                </div>
                <img src={img} alt="" />
                <p> {dec} </p>
            </div>
        </div>
    )
}

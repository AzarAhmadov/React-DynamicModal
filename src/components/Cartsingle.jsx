import React, { useState } from 'react'
import Modal from './Modal'

export default function Cardsingle({ el }) {

  const [modal, setModal] = useState(false)
  const [data, setData] = useState([])
  const getData = (img, card_title, dec) => {
    let data = [img, card_title, dec]
    setData(el => [1, ...data])
    return setModal(true)
  }

  return (
    <section id='cart-single'>
      <div className="card-content">
        <img src={el.img} alt="" />
        <h3> {el.card_title} </h3>
        <p> {el.dec} </p>
        <button onClick={() => getData(el.img, el.card_title, el.dec)}> Open Modal </button>
      </div>
      < Modal hide={() => setModal(false)} modal={modal} img={data[1]} title={data[2]} dec={data[3]} />
    </section>
  )
}

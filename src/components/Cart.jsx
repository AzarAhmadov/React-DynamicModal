import React from 'react'
import Cardsingle from './Cartsingle'
import { cart } from './data/data'

export default function Cart() {
    return (
        <main>
            <div className="card-grid">
                {
                    cart.map((el, idx) => {
                        return (
                            <Cardsingle el={el} key={idx} />
                        )
                    })
                }
            </div>
        </main>
    )
}

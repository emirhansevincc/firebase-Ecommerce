import React, { useState } from 'react'
import "./basket.css"

function Basket({ basketList }) {
    // console.log(basketList);

    const [totalPrice, setTotalPrice] = useState(0)

    let allNumbers = Number(0)
    basketList.map(element => {
        allNumbers += Number(element.price)
        // console.log(allNumbers);
    });


    return (
        <div className='basket-container'>

            <div className="container">
                {
                    basketList.map((item, index) => (
                        <div className="basket" key={index} >
                            <div className="product">
                                <div>
                                    <span>{item.name}</span>
                                </div>
                                <div>
                                    <span>${item.price}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <hr />
                <div className='total-container'>
                    <p className='total'>Total :</p>
                    <p className="total"> ${allNumbers}</p>
                </div>
            </div>

        </div >
    )
}

export default Basket
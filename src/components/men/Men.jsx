import React from 'react'

import "../home/home.css"

function Men() {
  return (
    <div className='card-container'>

      <div className="porductCard">
        <div className="product-pic">
          <img
            src="./image/kamil.jpg"
            alt="kamil"
            width={250}
            height={260}
          />
        </div>
        <div className="product-header">
          <h2>men</h2>
          <h3 className='price'>$ item.price</h3>
          <p>category</p>
        </div>
        <div className="add-to-cart">
          <button className='add-btn'>Add to Cart</button>
        </div>
      </div>

      <div className="porductCard">
        <div className="product-pic">
          <img
            src="./image/kamil.jpg"
            alt="kamil"
            width={250}
            height={260}
          />
        </div>
        <div className="product-header">
          <h2>item.productName</h2>
          <h3 className='price'>$ item.price</h3>
          <p>category</p>
        </div>
        <div className="add-to-cart">
          <button className='add-btn'>Add to Cart</button>
        </div>
      </div>

      <div className="porductCard">
        <div className="product-pic">
          <img
            src="./image/kamil.jpg"
            alt="kamil"
            width={250}
            height={260}
          />
        </div>
        <div className="product-header">
          <h2>item.productName</h2>
          <h3 className='price'>$ item.price</h3>
          <p>category</p>
        </div>
        <div className="add-to-cart">
          <button className='add-btn'>Add to Cart</button>
        </div>
      </div>

    </div>
  )
}

export default Men
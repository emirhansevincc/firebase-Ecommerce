import React from 'react'

import "../home/home.css"

// Firebase
import {
  auth,
  db
} from "../../firebase/firebase-config"

import {
  deleteDoc,
  doc,
} from 'firebase/firestore'

function Men({ productImage, isAuth, getProducts }) {

  const deleteMenProduct = async (id) => {
    const deletedItem = doc(db, "products", id)
    await deleteDoc(deletedItem)
  }

  return (
    <div className='card-container'>

      {
        getProducts.map((product, key) => {
          if (product.category === "men") {
            return (
              <div className="porductCard" key={key}>
                {
                  isAuth && auth.currentUser.displayName === "Emirhan Sevinç" && (
                    <div className="icon">
                      <button onClick={() => { deleteMenProduct(product.id) }}  >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  )
                }
                <div className="product-pic">
                  <img
                    src={`${productImage}`}
                    alt={product.id}
                    width={250}
                    height={260}
                  />
                </div>
                <div className="product-header">
                  <h2>{product.productName}</h2>
                  <h3 className='price'>$ {product.price}</h3>
                  <p>{product.category.toUpperCase()}</p>
                </div>
                <div className="add-to-cart">
                  <button className='add-btn'>Add to Cart</button>
                </div>
              </div>
            )
          }
        })
      }

    </div>
  )
}

export default Men
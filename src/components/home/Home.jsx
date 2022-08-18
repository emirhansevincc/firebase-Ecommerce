import React, { useEffect, useState } from 'react'
import "./home.css"

import {
    collection,
    deleteDoc,
    doc,
    getDocs,
} from 'firebase/firestore'

// Firebase
import {
    auth,
    db
} from "../../firebase/firebase-config"


function Home({ productImage, isAuth, getProducts, setGetProducts, basketList, setBasketList }) {

    const productsCollection = collection(db, "products")

    useEffect(() => {

        const getAllProducts = async () => {
            const data = await getDocs(productsCollection)
            setGetProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getAllProducts()

    }, [productsCollection])

    const deleteProduct = async (id) => {
        const deletedItem = doc(db, "products", id)
        await deleteDoc(deletedItem)
    }

    const addToCart = (id) => {
        const product = getProducts.find((product) => product.id === id)
        setBasketList([...basketList ,{ 
          name: product.productName,
          price: product.price
        }])
    
      }

    return (
        <div className='card-container'>

            {
                getProducts.map((item, index) => {
                    return (
                        <div className="porductCard" key={index}>
                            {
                                isAuth && auth.currentUser.displayName === "Emirhan Sevinç" && (
                                    <div className="icon">
                                        <button onClick={() => {deleteProduct(item.id) }}  >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                                )
                            }
                            <div className="product-pic">
                                <img
                                    src={`${productImage}`}
                                    alt="image"
                                    width={250}
                                    height={260}
                                />
                            </div>
                            <div className="product-header">
                                <h2>{item.productName}</h2>
                                <h3 className='price'>$ {item.price}</h3>
                                <p>{item.category.toUpperCase()}</p>
                            </div>
                            <div className="add-to-cart">
                                <button 
                                    className='add-btn' 
                                    onClick={() => {addToCart(item.id)}}>Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }



            {/* <div className="porductCard">
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
            </div> */}

        </div>
    )
}

export default Home
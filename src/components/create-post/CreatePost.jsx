import React from 'react'

import { auth } from '../../firebase/firebase-config'

import "./create.css"

function CreatePost({ setName, setCategory, createNewProduct, setPrice }) {

    const womenCategory = () => {
        setCategory("women")
    }

    const menCategory = () => {
        setCategory("men")
    }

    return (
        <div className='create-container'>
            <h2>Add product</h2>
            <div className="name">
                <input
                    type="text"
                    placeholder='Product name'
                    onChange={(e) => { setName(e.target.value) }}
                />
            </div>
            <div className="price">
                <input
                    type="number"
                    placeholder='Price'
                    onChange={(e) => { setPrice(e.target.value) }}
                />
            </div>
            <div className="category">
                <button onClick={womenCategory}>Women</button>
                <button onClick={menCategory}>Men</button>
            </div>
            <div className="seller">
                <h4>SELLER : {auth.currentUser.displayName}</h4>
            </div>

            <button
                className='addProduct'
                onClick={createNewProduct}
            >Add new product
            </button>

        </div>
    )
}

export default CreatePost
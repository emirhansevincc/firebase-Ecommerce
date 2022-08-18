import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

// const productCollection = collection(db, "products")

const productsCollection = collection(db, "products")
const getAllProducts = async () => {
    const data = await getDocs(productsCollection)
    return (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}

const initialState = {
    getAllProducts
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addItem: (state, action) => {
            
            
        },
    }
})

export const {
    addItem,
} = productsSlice.actions
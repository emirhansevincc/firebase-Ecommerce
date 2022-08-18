import { useState } from "react";

// Components
import Home from "./components/home/Home";
import Men from "./components/men/Men"
import Women from "./components/women/Women"
import Error from "./components/error/Error";
import Login from "./components/login/Login";
import CreatePost from "./components/create-post/CreatePost";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"

import { auth, db } from "./firebase/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { signOut } from "firebase/auth"
import Basket from "./components/basket/Basket";


function App() {

  const [show, setShow] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const [category, setCategory] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState(10)
  const [getProducts, setGetProducts] = useState([])
  const [basketList, setBasketList] = useState([])

  const [productImage, setProductImage] = useState('https://picsum.photos/id/180/2400/1600')




  const createNewProduct = async () => {
    const productsCollection = collection(db, "products")
    await addDoc(productsCollection, {
      id: auth.currentUser.uid,
      productName: name,
      category,
      productImage,
      price,
    })

  }

  const logout = () => {
    localStorage.clear()
    signOut(auth)
      .then(() => {
        setIsAuth(false)
        localStorage.clear()
        window.location.pathname = "/"
      })
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar">
          <Link to={"/"}>
            <h3>
              trendotoyol
            </h3>
          </Link>
          <ul className={"nav-links"} id={show ? "hidden" : ""}>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/men"}>
              <li>Men</li>
            </Link>
            <Link to={"/women"}>
              <li>Women</li>
            </Link>
            {
              !isAuth ? (

                <Link to={"/login"}><li>Login</li></Link>

              ) : (
                <>
                  <button
                    onClick={logout}
                    className="logout-btn"
                  >Admin - Logout</button>
                  <Link to={"/createproduct"}><li>Create</li></Link>
                  <Link to={"/basket"}>
                    <li>Basket</li>
                  </Link>
                </>
              )
            }
          </ul>
          <button className="toggle-icon"
            onClick={() => { setShow(!show) }}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>


        <Routes>
          <Route path="/" element={<Home
            productImage={productImage}
            isAuth={isAuth}
            getProducts={getProducts}
            setGetProducts={setGetProducts}
            basketList={basketList}
            setBasketList={setBasketList}

          />} />

          <Route path="/basket" element={<Basket
            basketList={basketList}
          />}
          />

          <Route path="/men" element={<Men
            productImage={productImage}
            isAuth={isAuth}
            getProducts={getProducts}
          />}
          />

          <Route path="/women" element={<Women
            productImage={productImage}
            isAuth={isAuth}
            getProducts={getProducts}
          />}
          />

          <Route path="/login" element={<Login
            setIsAuth={setIsAuth}
            isAuth={isAuth} />}
          />

          <Route path="/createproduct" element={<CreatePost
            setName={setName}
            setCategory={setCategory}
            createNewProduct={createNewProduct}
            setPrice={setPrice} />}
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
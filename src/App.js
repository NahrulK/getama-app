import "./App.css";
import Featured from "./Components/FeaturedProducts/Featured";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Produtcs from "./Pages/Products/Produtcs";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Success from "./Pages/Success/Success";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Produtcs /> */}
      {/* <SingleProduct /> */}
      {/* <Cart /> */}
      {/* <Success /> */}
      {/* <Login /> */}
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import Featured from "./Components/FeaturedProducts/Featured";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Produtcs from "./Pages/Products/Produtcs";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Produtcs /> */}
      <SingleProduct />
      <Footer />
    </>
  );
}

export default App;

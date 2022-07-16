import "./App.css";
import Featured from "./Components/FeaturedProducts/Featured";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Footer />
    </>
  );
}

export default App;

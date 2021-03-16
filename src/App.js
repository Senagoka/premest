import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Counter from "./Components/Counter";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Products from "./Components/Products";
function App() {
  const number =1 
  return (
    <>
    <NavBar/>
    <main>
      <Hero/>
      <Products/>
      <Counter/>
      <Form/>
      
    </main>
    <Footer/>
    </>
  );
}
export default App;

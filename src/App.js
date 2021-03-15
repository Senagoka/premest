import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Counter from "./Components/Counter";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
function App() {
  const number =1 
  return (
    <>
    <NavBar/>
    <main>
      <Hero/>
      <Counter/>
      <Form/>
    </main>
    <Footer/>
    </>
  );
}
export default App;

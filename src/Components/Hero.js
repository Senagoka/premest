
import ButtonContainer from "./ButtonContainer"
import Products from "./Products";
function Hero() {
    const styles ={
        background: "blue",
        height: 100,
        width: 100,
        borderRadius: 50,
        color: "white"
    }
return(
    <header style={{background: "url(./Galleries/rain2.svg.jpg)", backgroundAttachment: "scroll",  backgroundposition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
       <div className="hero">
           <h3>My Company Web site built with React Application</h3>
           <h1>providers of all kinds of Natural confort</h1>
           
        <ButtonContainer style={styles} tittle="BOOK NOW" />
        </div> 
        <div>
       
        </div>
    </header>
)
}
export default Hero;
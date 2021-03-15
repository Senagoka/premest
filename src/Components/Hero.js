
import ButtonContainer from "./ButtonContainer"
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
           <h3>My Company Web site <br></br>built with React Application</h3>
           <h1>Deals in all kinds of Africans Wears</h1>
           
        <ButtonContainer style={styles} tittle="BUY NOW" />
        </div> 
        <div>
       
        </div>
    </header>
)
}
export default Hero;
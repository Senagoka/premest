
// import {useState} from react;
function Form() {
    // const [email, setemail] = useState("");
    return(
        <div>
            <form>
                <input type="text" id="name" placeholder=" Enter Name"></input>
                <input type="enter number" placeholder=" Enter Number"></input>
              <input type="password" placeholder=" Enter Email"></input>
           <button>SUBMIT</button>
            </form>
        </div>
    );
}
export default Form;
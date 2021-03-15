import {useState} from "react"
function Counter() {
    const styles ={
        background: "green",
        Height: 100,
        width: 100,
        borderRadius: 50,
        color: "yellow"
    }

    const [count, setcount]=useState(5)
    return (
    
<div className="sena">
    <button onClick={() => setcount(count + 1)}>Add</button>
    <div>
        Quantity:{count}
    </div>
    <button onClick={() => setcount(count -1)}>Reduce</button>
</div>

    )
}
export default Counter;
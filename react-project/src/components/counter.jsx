import {useState} from "react";


export default function Counter () {

 const [count, setCount] = useState(0);

const [incrementBy, setIncrementBy] = useState(1);
//  This is a state variable

 function handleClick () {

    return setCount (count + incrementBy);
 }

 function handleClickDecrement () {

    return setCount (count - incrementBy);
 }

 function handleCrement() {

    return setIncrementBy (incrementBy + 6);
 }

 function handleDecrement () {

    return setIncrementBy (incrementBy - 10 );
 }


    return (
    <div>

       <h1> The count value is :{count} </h1>  

       <button onClick= { handleClick} >Increment</button>
       <button onClick= {handleClickDecrement} > Decrement </button>

       <h2>We are Incrementing by : {incrementBy}</h2>

       <button onClick= {handleCrement}> Increment </button>

       <button onClick= {handleDecrement}> Decrement </button>
        
        
        
   </div>
    );
}

// In the code above, I created a function called counter which when displayed on the webpage, it can increase or decrease the counter number by clicking a button. The components uses State in React to display the number increase or decrease on the web page. 
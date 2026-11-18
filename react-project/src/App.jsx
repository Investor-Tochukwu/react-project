import ConditionalComponent from "./components/ConditionalComponent";
import ConditionalComponents2 from "./components/ConditionalComponents2";
import ConditionalComponents3 from "./components/ConditionalComponents3";
import ConditionalComponents4 from "./components/ConditionalComponents4";
import { ConditionalComponents5 } from "./components/ConditionalComponents5";
import Counter from "./components/counter";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {



  const person = {
    name :"Joy",
    message : "Hi there!",
    emoji: "@",
    seatNumbers: [1,2,3,4,6]
  }

  return (

    
    <>
    
        <div className="hero">
          
        </div>
      
    < Hello person= {person}/>

    

    <ConditionalComponent/>

    <ConditionalComponents2/>
    <ConditionalComponents3/>
    <ConditionalComponents4/>
    <ConditionalComponents5/>
    <Fruits/>
    <Message/>
    <Counter/>

    </>
  )
}

export default App

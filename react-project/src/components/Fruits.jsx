
 import Fruit from "../components/Fruit";

 import Fruits1 from "./Fruits1";

export default function Fruits () {

    // const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];

    const fruits = [

        {name: "Apple", price: 10, emoji: "@", soldout: false},
        {name: "Mango", price: 20, emoji: "#", soldout: true },
        {name: "Banana", price: 30, emoji: "$", soldout: false },
        {name: "Orange", price: 40, emoji: "%", soldout: true },
        {name: "Pineapple", price: 50, emoji: "&", soldout: false }
    ]



    return <div>

        <ul>
            
             {/* {fruits.map(fruit=> <li key={fruit.name}>{fruit.emoji} {fruit.name} ${fruit.price}</li>)}
         */}

         {/* {/* { 
         fruits.map(fruit=> (<Fruit name={fruit.name} price= {fruit.price} emoji= {fruit.emoji} />) )
            */}
        

          
        </ul>
      
    </div>
}
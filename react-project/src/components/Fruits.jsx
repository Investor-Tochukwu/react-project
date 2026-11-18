
 import Fruit from "../components/Fruit";

//  import Fruits1 from "./Fruits1";

 export default function Fruits () {

    // const fruitsName = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];

    const fruits = [

        {name: "Apple", price: 10, emoji: "@", soldout: true},
        {name: "Mango", price: 20, emoji: "#", soldout: true},
        {name: "Banana", price: 30, emoji: "$", soldout: false },
        {name: "Orange", price: 40, emoji: "%", soldout: false },
        {name: "Pineapple", price: 50, emoji: "&", soldout: true}
    ]



    return (

        <div> 
            
        {/* {fruitsName} */}
    {/* This code was written to display the fruitsName array, but with this code, all the fruits would display as a single string. There would not be spaces beside it.
 */}

      {/* {fruitsName.map( (fruit) => (<ul> <li key= {fruit} >{fruit}</li> </ul>)          )} */}

      {/* This code was written to display the fruitsName array with it fruit standing independently. The map method helps to itelate the fruit array */}
     

      {/* <ul>

        {fruits.map( (fruit) => ( <li key= {fruits.name}> {fruit.name} {fruit.price} {fruit.emoji} </li>))}

      </ul> */}

      {/* This code was written to display the items in the fruits arrray */}

       <ul>

        {fruits.map((fruit) => (<li> <Fruit name= {fruit.name} price= {fruit.price} emoji={fruit.emoji} soldout = {fruit.soldout} /> </li>))};

        </ul>
    
       {/* This code was written to connect the Fruit component to this Fruits component so as to display the array in this Fruits components using props and map operator */}


     </div>
//     
// 
    )

 }
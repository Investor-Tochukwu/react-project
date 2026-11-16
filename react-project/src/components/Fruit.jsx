

export default function Fruit ( {name, price, emoji} )  {

    return (

        <div>

           {
            price > 25 ? ( <li> {name} {price} {emoji}   </li>) : ( " ")
         }

        </div>
       
        


    );

  
};

// In the code above, I used teneray operator to select some fruits out the list of fruits that fulfuls a setout conditions.
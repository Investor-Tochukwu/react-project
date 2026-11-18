

export default function Fruit ({name, price, emoji, soldout} )  {

    return (

        <>

              {/* {
            price > 25 ? ( <li> {name} {price} {emoji}   </li>) : ( " ")
         } */}






          {/* <li>
               {name} {price} {emoji}

          </li>
           */}
        {/* This code was written to dispaly the objects in the array in the Fruits component. I made use of props to connect the Fruit component and the Fruits component */}

    

        {/* { price > 20 ?  (  <li> {name} {price} {emoji} </li>  ) : ("")  } */}

        {/* In this code, I was able to use tenary operator in javascript to display only the fruits which prices are above 20  */}


        {/* { soldout == false ? ( <li> {name} {price} {emoji} </li>  ) : ("")  } */}

        {/* In this code, I was able to use tenary operator in javascript to display only the fruits which soldout property  are false */}



        {  <li> {emoji} {name} {price} {soldout ? "Soldout" : " "} </li>     }

        {/* This code was written to showcase whether a fruit is soldout by writing soldout in the front of the fruit when displayed. */}
    


        </>

        
        
    
       
        


    )

  
}
// In the code above, I used teneray operator to select some fruits out the list of fruits that fulfuls a setout conditions.
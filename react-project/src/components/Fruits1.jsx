export defualt function Fruits1 ( {name, price, emoji, soldout}) {
  return (
    <div>
     {
        soldout = true ? ( <li> {name} {price} {emoji} {soldout}  </li>) : ( " ")
     }
    
    </div>
  );
    

}
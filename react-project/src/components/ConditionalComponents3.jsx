export default function ConditionalComponents3 () {
 let message;

 const display = true;

 if (display) {
    message = <h1>Learning how to display conditional components without using return keyword twice</h1>;
 } else {
    message = <h2> Options 2 </h2>;
 };

 return message;

}

// In the code above, I was trying to render a conditional components without using the return keyword twice.
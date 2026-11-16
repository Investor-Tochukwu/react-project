


 export default function ConditionalComponent () {
    const display = true;

    if (display) {
          return (
           <div>
            <h3>This is a Conditional Statement</h3>
           </div>
          );

    } else {
    return (
            <div>
                <h3>Code everyday!</h3>
            </div>
    );
    
    }
}

// In the code above I practiced how to render a conditional component whereby I used If statement to select what to display according to the truthy value of the js code.
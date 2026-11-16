import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponents2 () {

    const display = false;

    if(display) {
        return (
            <div>
                <Code/>
            </div>
        );
    } else {
        return (
           <div>
            <Welcome/>
           </div>
        );
    }


    
}

// In the code above I was trying to  render a conditional compponents with two return keyword. Actually, I created two different components namely code.jsx and welcome.jsx, I then imported the two components into this conditionalcomponents2 components and used a javascript If statement to choose the one to display. 
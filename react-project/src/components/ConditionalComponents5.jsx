import Code from "./Code";
import Welcome from "./Welcome";


export function ConditionalComponents5 () {

    const display = true;

    return display ? <Code/> : <Welcome/>

}

// In the code above I was trying to  render a conditional compponents with tenary operator. Actually, I created two different components namely code.jsx and welcome.jsx, I then imported the two components into this conditionalcomponents5 components and used a javascript tenary operator to choose the one to display. 
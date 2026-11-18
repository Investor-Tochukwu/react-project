export default function Message () {

function handleClick () {
            console.log("Button Clicked");
        }

    return <div>

        <button onClick= {handleClick}> Click Here To Get Message</button>

        {/* This code above shows basic event handling in react, and when the button is click on the web, it registers the message button clicked in the console */}
    </div>
}
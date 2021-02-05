import {useState} from "react";

const ClickComponent = () => {
    const [text, setText] = useState("hello");

    const handleClick = () => {
        setText("bye");
    }

    return (
        <div data-testid={"clickID"} onClick={handleClick}>
            {text}
        </div>
    )
}

export default ClickComponent;
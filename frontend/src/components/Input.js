import {useState} from "react";

function Input({handleClick}) {
    const [text, setText] = useState("");


    return (
        <>
            <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} />
            <button onClick={() => handleClick(text)}>Add Me</button>
        </>
    )
}

export default Input;
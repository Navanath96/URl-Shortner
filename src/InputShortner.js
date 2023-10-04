import React, { useState } from "react";

function InputShortner({setInputvalue}){
    const [value,setValue]=useState("");

    function handleClick(){
        setInputvalue(value);
        setValue("");
    }

    return <div className="input">
        <h1>URL <span>Shortner</span></h1>
        <div>
        <input 
        type="text" 
        placeholder="paste a link"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        />
        <button onClick={handleClick}>Shorten</button>
        </div>
    </div>
}


export default InputShortner;
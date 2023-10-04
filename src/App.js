import React, { useState } from "react";
import "./App.css";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import InputShortner from "./InputShortner";
import LinkResult from "./LinkResult";



function App() {
  const [inputValue, setInputvalue]=useState("");

  
  return (
    <div className="App">
      <InputShortner setInputvalue={setInputvalue}/>
      <LinkResult inputValue={inputValue}/>
     </div>
  );
}

export default App;

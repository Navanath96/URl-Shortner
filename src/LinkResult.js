import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";


function LinkResult({inputValue}){
    // console.log(inputValue);
    const [shortenLink, setShortenLink]=useState("");
    const [Loading,setloading]=useState(false);
   

    const fetchData= async ()=>{
        try{
            setloading(true);
            const response= await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
            .then(response=> response.json()).then(data=>{
                setShortenLink(data.result.full_short_link);
                // console.log(data);
              
            })
        }catch(err){
            console.log("error",err);
        }finally{
            setloading(false);
        }
    }
    useEffect(()=>{
        if(inputValue.length){
            fetchData();
        }
    },[inputValue]);

    if(Loading){
        return <p>Loading...</p>
    }

    return(
        <>
   {shortenLink &&
    (<div className="result">
    <p>{shortenLink}</p>
    <CopyToClipboard text={shortenLink}>
    <button>Copy to Clipboard</button>
    </CopyToClipboard>
</div>
    )}
    </>
    )
}

export default LinkResult;
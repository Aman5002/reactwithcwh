import React, { useState } from "react";

export default function TextForms(props) {
  const [text, settext] = useState("");
  const clickUPhandler = () => {
    let uptext = text.toUpperCase();
    settext(uptext);
    if(text.length===0){
      props.alert("Please type somthing to convert!!!" , "danger")
    }
    else{
      props.alert("Converted to UPPER CASE" , "success")

    }
  };
  const clickLowhandler = () => {
    let lowtext = text.toLowerCase();
    settext(lowtext);
    if(text.length===0){
      props.alert("Please type somthing to convert!!!" , "danger")
    }
    else{
    props.alert("Converted to lower case" , "success")
    }
  };
  const clickclrhandler = () => {
    settext('');
    if(text.length===0){
      props.alert("Please type somthing to clear!!!" , "danger")
    }
    else{
    props.alert("Text is cleared" , "success")
    }

  };
  const clickchyphenhandler = () =>{
    let text1 = text.split(" ");
    for(var i = 0; i<text1.length;i++){
        if(i!==text1.length-1){
        text1[i] = text1[i] + "-"
    }}
    settext(text1.join(""));
    if(text1.length===0 || text1.length ===1){
      props.alert("Please type at least two words to add  Hyphens!!!" , "danger")
    }
    else{
    props.alert("Hyphens (-) Added" , "success")
    }
  }
  const clickctHiShandler = () =>{
    let text1 = text.split("");
    for(var i = 0; i<text1.length;i++){
        if(i%2!==0){
        text1[i] = text1[i].toUpperCase();  
    }else{
    text1[i] = text1[i].toLowerCase();  
}}
    settext(text1.join(""));
    if(text.length===0){
      props.alert("Please type somthing to convert" , "danger")
    }
    else{
    props.alert("Converted to tHiS CaSe" , "success")
    }

  }
  const handlechange = (event) => {
    settext(event.target.value);
  }; // word and character condition
   let words;
  let sword;
  let scharacter;
  let characters = text.length;
  let len = text.length;
  if(len === 0 || text[len-1]===" "){
      words = (text.split(" ").length)-1;
  } else{
      words = text.split(" ").length;
    }
  let time = 0.008 * words;
 // above condition is used because  by default the lenght of empty split array is 1 so if the textarea is empty then it showing words = 1 so to avoid it we use this. :)
  return (
    <div style={{color : props.mode==='dark'? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
        style={{color : props.mode==='dark'? 'white' : 'black' , backgroundColor: props.mode==='light'? 'white' : '#212529'}}
          className="form-control"
          onChange={handlechange}
          value={text}
          placeholder="Enter your text"
          id="myBox"     
          rows="8 "
        ></textarea>
      </div>
      <div className="btn btn-primary mx-1" onClick={clickUPhandler}>Covert to UPPERCASE</div>
      <div className="btn btn-primary mx-1" onClick={clickLowhandler}>Covert to lowercase</div>
      <div className="btn btn-primary mx-1" onClick={clickchyphenhandler}>Insert Hyphen</div>
      <div className="btn btn-primary mx-1" onClick={clickctHiShandler}>tHiS CaSe</div>
      <div className="btn btn-primary mx-1" onClick={clickclrhandler}>Clear</div>
      <div className="container my-2">
        <h2>Your text Summery</h2>
        {words}{" "}
        {words === 1 || words === 0 ? (sword = "word") : (sword = "words")} and{" "}
        {characters}{" "}
        {characters === 0 || characters === 1
          ? (scharacter = "character")
          : (scharacter = "characters")}
        <p>({time*60 + "sec."}) {time} min assumed to read it </p>
        <h1>Preview</h1>
        <p>{text.length>0 ? text : 'Enter someting in textbox above to preivew here'}</p>
      </div>
    </div>
  );
}

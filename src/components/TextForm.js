import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = (event)=>{
      let newText = text.toLowerCase();
      setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
        let splitted_text = event.target.value.split(" ");
        if(splitted_text[splitted_text.length-1]===''){
          setWordsCount(splitted_text.length-1);
        }else{
          setWordsCount(splitted_text.length);
        }
       
    }
    const handleClearClick = (event)=>{
      setText('');
      setWordsCount(0);
    }
    const handleCopyClick = (event)=>{
      navigator.clipboard.writeText(text);
    }
    const [text,setText] = useState('Enter Text here');
    const [wordsCount,setWordsCount] = useState(text.split(" ").length);

  return (
    <>
      <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-2">
              <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick = {handleLowerClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick = {handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-2" onClick = {handleCopyClick}>Copy To Clipboard</button>
      </div>
      <div className="container my-2">
          <h2>Your text summary</h2>
          <p>{wordsCount} words,{text.length} characters</p>
          <p>{0.008*wordsCount} Minutes Read</p>
          <h2>Preview</h2>
          <p>{text}</p>
      </div>
    </>
  )
}

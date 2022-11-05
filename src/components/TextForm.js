import React,{useState} from 'react'

export default function TextForm(props) {
    function getSentanceCount(text){
      const sentances = text.replace(/\.(?!\d)/g,'.|').split("|");
      return sentances.length;
    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('coverted to Uppercase','success');
    }
    const handleLowerClick = (event)=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('coverted to lowercase','success');
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
        let splitted_text = event.target.value.split(" ");
        if(splitted_text[splitted_text.length-1]===''){
          setWordsCount(splitted_text.length-1);
        }else{
          setWordsCount(splitted_text.length);
        }
        //calculate number of sentance
        setSentanceCount(getSentanceCount(text));
    }
    const handleClearClick = (event)=>{
      setText('');
      setWordsCount(0);
      props.showAlert('Text Cleared','success');
    }
    const handleCopyClick = (event)=>{
      navigator.clipboard.writeText(text);
      props.showAlert('Text Copied','success');
    }
    const handleExtraSpacesClick=(event)=>{
      const filteredText = text.replace(/\s+/g,' ').trim();
      setText(filteredText);
      props.showAlert('Removed extra spaces','success');
    }
    const handleBeautify=(event)=>{
        let newSentances = [];
        const formattedText = text.replace(/\s+/g,' ').trim();
        const sentances = formattedText.replace(/\.(?!\d)/g,'.|').split("|");
        sentances.forEach(sentance => {
          if(sentance[1]===''){
            newSentances.push(sentance);
          }else{
            newSentances.push(' '+sentance);
          }
        });
        let finalText='';
        newSentances.forEach(newSentance => {
          finalText=finalText+newSentance;
        });
        //incomplete
        setText(finalText);
        props.showAlert('Text beutfied','success');

    }
    const [text,setText] = useState('Enter Text here');
    const [wordsCount,setWordsCount] = useState(text.split(" ").length);
    const [sentanceCount,setSentanceCount] = useState(text.replace(/\.(?!\d)/g,'.|').split("|").length);

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-2">
              <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2 my-1" onClick = {handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2 my-1" onClick = {handleLowerClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2 my-1" onClick = {handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-2 my-1" onClick = {handleCopyClick}>Copy To Clipboard</button>
          <button className="btn btn-primary mx-2 my-1" onClick = {handleExtraSpacesClick}>Remove Extra Spaces</button>
          <button className="btn btn-primary mx-2 my-1" onClick = {handleBeautify}>Beautiefy Sentance</button>
      </div>
      <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
          <h2>Your text summary</h2>
          <p>{wordsCount} words,{text.length} characters,{sentanceCount} sentances</p>
          <p>{0.008*wordsCount} Minutes Read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text:"Enter somthing in the textbox to preview it here."}</p>
      </div>
    </>
  )
}

import React,{useState} from 'react'

export default function About() {
    const [myStyle,setMyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    });
    const [btnText,setBtnTxt] = useState('Enable Dark Mode');
    const toggleStyle =()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            });
            setBtnTxt('Enable Light Mode');
        }else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnTxt('Enable Dark Mode');
        }
    }
  return (
    <div className="container my-4" style={myStyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze Your Text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    You can enhence your text
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Supported by every browse 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Created By;
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Ninja Mohd Zaid<br/>
                    9759955376<br/>
                    nmzaid376@gmail.com
                </div>
                </div>
            </div>
        </div>
        <div className="container my-3">
            <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
        </div>
    </div>
  )
}

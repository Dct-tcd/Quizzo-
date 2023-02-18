import React, { useEffect, useState } from 'react';
import Questions from './Questions';
export default function Options({score , setscore ,question , option1 , option2, option3 ,ans ,response ,  setresponse } ,) 
{

const [state1 , setstate1] = useState(false);
const [state2 , setstate2] = useState(false);
const [state3 , setstate3] = useState(false);

    const handle1 = () => {
        if (ans==1) 
        { 
            setscore(score => (score + 1));
        }
        if (state2==false)setresponse(response => response+1);
    
                  setstate2(true);   
                  setstate3(true);   
        // setresponse(response => response+1);           
    }
    const handle2 = () => {
        if (ans==2)  
        {  
            setscore(score => score + 1);
        }
        if (state1==false)setresponse(response => response+1);
    
                  setstate1(true);   
                  setstate3(true);   
                  
        // setresponse(response => response+1);
    }
    const handle3 = () => {
        if (ans==3) 
        {   
            setscore(score => score + 1);
        }
        if (state2==false)setresponse(response => response+1);
    
                  setstate2(true);   
                  setstate1(true);   
                  
        }
    
 return (
    
   <div>  
    
    <div className="card w-55  mx-5 my-2" >
    <h4  className="card-title mx-5 my-2"> {question} </h4>
    <div className="container float-start mx-0 my-1" style={{textAlign:'left'}}>

<button  onClick={handle1} disabled={state1} className="btn btn-danger px-2 py-1 mx-5  rounded-1 "> {option1} </button>
<button  onClick={handle2} disabled={state2} className="btn btn-danger px-2 py-1 mx-5  rounded-1 "> {option2} </button>
<button  onClick={handle3} disabled={state3} className="btn btn-danger px-2 py-1 mx-5  rounded-1 "> {option3} </button>
   
    </div>
    </div>
    </div>
   )
}

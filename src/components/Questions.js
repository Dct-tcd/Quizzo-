import React, { useState } from 'react';
import Options from './Options';
import Result from './Result';

export default function Questions() {
  const clicker = () =>{
    
  } 
  const [response, setresponse] = useState(0);
  const [score , setscore]   = useState(0);
  return (
    <div className='container'>
      {/* {setstater(true)} */}
      <div className='invi'>
      <Options  response={response} setresponse={setresponse} score={score} setscore={setscore} question="What is the capital of state of Nagaland ?" option1="Kohima" option2="Imphal" option3="Aizwal" ans="1" />
      <Options  response={response} setresponse={setresponse} score={score} setscore={setscore} question="Which team has won the t20 cricket world cup Most times ?" option1="India" option2="Australia" option3="West indies" ans="3"/>
      <Options  response={response} setresponse={setresponse} score={score} setscore={setscore} question="Who Won the first Gold Medal for India at the Olympics ?" option2="Abhinav bindra" option1="Neeraj Chopra" option3="Sakshi malik" ans="2"/>
      <Options  response={response} setresponse={setresponse} score={score} setscore={setscore} question="With which country india share longest border ?" option1="China" option2="Pakistan" option3="Bangladesh" ans="3"/>
      </div>
      {clicker}
      {response==4 ? <Result score={score} /> : ''}
    </div>
  )
}

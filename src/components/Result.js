import React from 'react'

export default function Result({score}) {
  return (
    <div>
      <div className="container" style={{textAlign:'center' , marginTop:'30px'}}>
        <img src="https://icon-library.com/images/check-icon/check-icon-10.jpg" style={{height:'100px',textAlign:'left',marginTop:'30px'}}></img>
        <h2 style={{marginTop:'30px'}}> You solved {score} / 4 questions </h2>
      </div>
    </div>
  )
}

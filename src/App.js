import React, { useState } from 'react';
import './App.css';
import coke from '../src/images/coke1.webp'
import sprite from '../src/images/sprite.jpg'
import thumsup from '../src/images/thumsup.jfif'
import kinley from '../src/images/kinley.jfif'
import lays1 from '../src/images/lays1.jfif'
import lays2 from '../src/images/lays2.jfif'
import lays3 from '../src/images/lays3.jfif'
import lays4 from '../src/images/lays4.jfif'
import buiscuit1 from '../src/images/biscuit1.jfif'
import buiscuit2 from '../src/images/biscuit2.jfif'
import buiscuit3 from '../src/images/biscuit3.jfif'
import buiscuit4 from '../src/images/biscuit4.jfif'




const App=() => {

  const [balance ,setBalance]=useState("");
  const message=()=>{
    alert('First add money');
  }
  const handleChange=(e)=>{
    setBalance(e.target.value);
  }
  const submitClick=()=>{
    document.getElementById('balance').innerHTML=`Balance is: ${balance}`
  }
 
  return (   
     <>
     <div className='maindiv'>
     <div className='container'>
     <div className='card'>
      <div className='card-body'>
        <img src={coke} alt="coke"/>
      </div>
      <div className='card-footer'>
        <button onClick={message}>&#8377; 50</button>
      </div>
     </div>

     <div className='card'>
      <div className='card-body'>
        <img src={sprite} alt="coke" />
      </div>
      <div className='card-footer'>
      
        <button onClick={message}>&#8377; 40</button>
      </div>
     </div>

     <div className='card'>
      <div className='card-body'>
        <img src={thumsup} alt="coke"/>
      </div>
      <div className='card-footer'>
        
        <button onClick={message}>&#8377; 60</button>
      </div>
     </div>

     <div className='card'>
      <div className='card-body'>
        <img src={kinley} alt="coke" />
      </div>
      <div className='card-footer'>
        
        <button onClick={message}>&#8377; 20</button>
      </div>
     </div>

     <div className='card'>
      <div className='card-body'>
        <img src={lays1} alt="coke" />
      </div>
      <div className='card-footer'>
       
        <button onClick={message}>&#8377; 30</button>
      </div>
     </div>

     <div className='card'>
      <div className='card-body'>
        <img src={lays2} alt="coke" />
      </div>
      <div className='card-footer'>
       
        <button onClick={message}>&#8377; 40</button>
      </div>
     </div>

     <div className='card'>
      <div className='card-body'>
        <img src={lays3} alt="coke" />
      </div>
      <div className='card-footer'>
       
        <button onClick={message}>&#8377; 30</button>
      </div>
     </div>

     <div className='card'>
      <div className='card-body'>
        <img src={lays4} alt="coke" />
      </div>
      <div className='card-footer'>
       
        <button onClick={message}>&#8377; 30</button>
      </div>
     </div>

     <div className='card'>
      <div className='card-body'>
        <img src={buiscuit1} alt="coke" />
      </div>
      <div className='card-footer'>
       
        <button onClick={message}>&#8377; 30</button>
      </div>
     </div>

     <div className='card'>
      <div className='card-body'>
        <img src={buiscuit2} alt="coke" />
      </div>
      <div className='card-footer'>
       
        <button onClick={message}>&#8377; 10</button>
      </div>
     </div>

     <div className='card'>
      <div className='card-body'>
        <img src={buiscuit3} alt="coke" />
      </div>
      <div className='card-footer'>
       
        <button onClick={message}>&#8377; 40</button>
      </div>
     </div>

     <div className='card'>
      <div className='card-body'>
        <img src={buiscuit4} alt="coke" />
      </div>
      <div className='card-footer'>
       
        <button onClick={message}>&#8377; 25</button>
      </div>
     </div>
     </div>
     <div className='subdiv'>
      <label>Add Money</label><br/>
      <input type="number" value={balance} onChange={handleChange} placeholder='Add money here'/><br/>
      <button onClick={submitClick}>Add</button>
      <p id="balance"></p>

     </div>
     </div>

     </>
  );
}
export default App;

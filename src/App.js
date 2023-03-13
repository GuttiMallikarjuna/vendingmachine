import React from "react";
import Products from './products'
import Product from './product';
import './App.css';


const App1=()=>{

   const submitClick=()=>{
    const dd = document.getElementById('dd');
    const ddItem=dd.options[dd.selectedIndex].text;
    const item=document.getElementById('item').value;
    const money=document.getElementById('money').value;
    const qty=document.getElementById('quantity').value;
    // eslint-disable-next-line array-callback-return
    Products.map(product => {
      const sum= product.price * qty;
      const remainingbalance= money - sum;
     

        if(product.productName === ddItem && product.id.toString() === item && sum <= money){
          document.getElementById('message').innerHTML= `<span style="color:green">Remaining Balance is: ${remainingbalance}</span>`;
              document.getElementById('display').innerHTML= 
               ` <img src=${product.productImage}/> <br/> Hii take your product.Enjoy the day`;
              
           }else if(product.productName === ddItem && product.id.toString() === item && sum > money){
            document.getElementById('message').innerHTML= `<span style="color:red">Insufficient funds</span>`;
           }
   })
    
   }
   
    return(
        <>
        <h3 id="head">Vending Machine</h3>
        <div className="maindiv">
        <div className="shop">
           
            <div className="products">
                {Products.map((product)=>(
                    <Product data={product} />
                ))}
            </div>

        </div>
        <div className='subdiv'>
            <label id="selectlabel">Select product</label>
            <select id="dd">
                {
                    Products.map((product) =>(
                        <option value={product.id}>{product.productName}</option>
                    ))
                }
            </select><br/>
      <label>Enter Id</label><br/>
      <input type="number" id="item"  placeholder='Enter Id here'/><br/>
      <label>Place Money</label><br/>
      <input type="number" id="money"  placeholder='Place Money here'/><br/>
      <label>Quantity</label><br/>
      <input type="number" id="quantity"  placeholder='Select quantity'/><br/>
      <button onClick={submitClick}>Enter</button>
      <p id="message"></p>
      <div id="display">
       
      </div>
     </div>
     
        
        </div>
        </>
    )
}
export default App1;

import React from 'react'

const Contact = () => {
  return (
    <div className='container' style={{marginTop:'50px'}} >
    <div className='row'>
      <div className='col'>
      <img src="a1.jpg" alt=""/>
      

      
      </div>
      
      <div className='col'  >
      <h1>Contact us</h1>
      <p>please fill the below information</p>
      <input type="text" placeholder="Name"/> 
      <br/><br/>
      <input type="text" placeholder="Email-id"/>
      <br/><br/>
      <input type="text" placeholder="mobile Number"/>
      <br/><br/>
      <input type="text" placeholder="Address"/>
      <br/>
      <br/>
      <textarea name="text" placeholder="Message" id="" rows="5" cols="30"/><br/><br/>
      <button>submit</button>
      </div>
      </div>
      </div>
  )
}

export default Contact

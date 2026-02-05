import React from 'react'

function Footer() {
  return (
//    <footer >
    <div className='footer-container'>
            {/* <hr className='hr'/> */}

        <div className="footer-about">
            
        <h3>Beyond Pages</h3> <br/>
        <p>Curated stories for curious minds. From timeless 
            classics to the latest bestsellers, find your next
            great escape at Beyond pages. Your next favorite
            chapter starts here.</p>
        </div>
        <div className='footer-company'>
            
            <h4>Company</h4> <br/>
            <p>About Us</p> <br/>
            <p>Careers</p> <br/>
            <p>Contact Us</p> <br/>
        </div>
        <div className='footer-help'>

            <h4>Help</h4> <br/>
            <p>Shipping Policy</p> <br/>
            <p>Returns</p> <br/>
            <p>FAQ</p> <br/>
        </div>   
         </div> 
    // </footer> 
  )
}

export default Footer

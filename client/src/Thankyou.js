import React from 'react';
import './Thankyou.css';

const Thankyou = () => {
  return (
    <div className='body-main'>
        <div className='thank-sec'>
            <div className='container'>
                <div className='thnkct'>
                <h1>Thank you !</h1>
                    <p>Thanks for subscribing to our news letter.</p>
                    <p>you should receive a confirmation email soon  </p>
                   <div className='thankbtn'>
                    <button class="go-home hero-btn">
                        go home
                        </button>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Thankyou

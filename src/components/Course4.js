// Page1.js
import React from 'react';
import './Course1.css'
const Course4 = ({ heading }) => (
  <div>
    <h1>{heading}</h1>
    {/* Content for Page 1 */}
    <p>You have all known Zoe for different lengths of time. Don't be fooled by the fun, energetic and caring person you see today, she used to be a shit bag.</p>
    <br/>
    <p>I would love to ruin your dinner tonight as revenge for her years of psychological abuse, but todays her day.</p>
    <br/>
    <div className='image-container'>
      <img className="image4" src="https://res.cloudinary.com/dfipoufmj/image/upload/v1695861090/zoe_suffragettes_yrkdht.jpg" alt=""></img>
    </div>
    <p>In celebration of this, and because you're probably all health conscious middle aged women now, we've got a spread inspired by her young adult adventures</p>
    <div className='image-container'>
      <img className="image4" src="https://res.cloudinary.com/dfipoufmj/image/upload/v1695861090/zoe_party_hat_exb4tp.jpg" alt=""></img>
    </div>
  </div>
);

export default Course4;

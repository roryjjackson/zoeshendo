// Page1.js
import React from 'react';
import './Course1.css'
const Course1 = ({ heading }) => (
  <div>
    <h1>{heading}</h1>
    <p>Welcome to a celebration of Zoe through the ages ... </p>
    <div className='image-container'>
      <img className='image1' src="https://res.cloudinary.com/dfipoufmj/image/upload/v1695861051/IMG-20230927-WA0024_h4bcco.jpg" alt="hjdosh"/>
    </div>
    {/* Content for Page 1 */}
    <br/>
    <div className='image-container'>
      <img className='image2' src="https://res.cloudinary.com/dfipoufmj/image/upload/v1695861209/20230927_163451_lcsfvr.jpg" alt="hjdosh"/>
    </div>
  </div>
);

export default Course1;

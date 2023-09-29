import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h2>A Taste of Zoe.</h2>
//       <p>Welcome to your evening meal, lovingly prepared by mother louise, and orchestrated from afar by Rory. Zoes Bro.</p>
//       <button>Click here to begin</button>
//     </div>
//   );
// }

// export default App;

// App.js
import React, { useState } from 'react';
import Course1 from './components/Course1';
import Course2 from './components/Course2';
import Course3 from './components/Course3';
import Course4 from './components/Course4';
import Course5 from './components/Course5';
import Course6 from './components/Course6';
import Button from './components/button';
import VideoPlayer from './components/video';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const getPageHeading = (page) => {
    switch (page) {
      case 2:
        return 'A Taste Of Zoe';
      case 3:
        return 'Your first course...';
      case 4:
        return 'As Zoe grew, so did her appetite';
      case 5:
        return 'Main course';
      case 6:
        return 'A wee cleanser';
      case 7:
        return 'One taste of Cameron, and Zoe was hooked';
      // case 7:
        // return 'One taste of Cameron, and Zoe was hooked';
      default:
        return 'Page Heading';
    }
  };

  return (
    <div>
      <div className='button-container'>
        {currentPage > 1 && <Button className="button" onClick={prevPage} text="Previous" />}
        {currentPage < 7 && <Button className="button" onClick={nextPage} text="Next" />}
      </div>
      {currentPage === 1 && <VideoPlayer heading={getPageHeading(currentPage)} />}

      {currentPage === 2 && <Course1 heading={getPageHeading(currentPage)} />}
      {currentPage === 3 && <Course2 heading={getPageHeading(currentPage)} />}
      {currentPage === 4 && <Course3 heading={getPageHeading(currentPage)} />}
      {currentPage === 5 && <Course4 heading={getPageHeading(currentPage)} />}
      {currentPage === 6 && <Course5 heading={getPageHeading(currentPage)} />}
      {currentPage === 7 && <Course6 heading={getPageHeading(currentPage)} />}
    </div>
  );
}

export default App;

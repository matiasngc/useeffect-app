import React, { useState } from 'react'
import Lifecycle from "./Lifecycle";
// import FetchCard from './FetchCard'
// import ResizeApp from "./ResizeApp";

const App = () => {

  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      { show && <Lifecycle /> }
      {/* <FetchCard /> */}
      {/* { show && <ResizeApp />} */}
    </div>    
  );
}

export default App;

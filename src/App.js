

import React, { useState } from "react";
function App() {
  const [counts, setcounts] = useState(0);
  const [counts1,setcounts2]=useState(0);
  function myfunc() {
    setcounts(counts + 1);
  }
  function myfunc1() {
    setcounts(counts - 1);
  }
  function myfunc3() {
    setcounts2(counts1 + 1);
  }
  return (
    <>
      <button onClick={myfunc}>Increase</button>
      <span>{counts}</span>
      <button onClick={myfunc1}>Decrease</button>
      <button onMouseOver={myfunc3}>Hover{counts1}</button>
    </>
  );
}
export default App;
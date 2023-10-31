

import React, { useState } from "react";
function App() {
  const [counts, setcounts] = useState(0);
  function myfunc() {
    setcounts(counts + 1);
  }
  function myfunc1() {
    setcounts(counts - 1);
  }
  function myfunc3() {
    setcounts(counts + 1);
  }
  return (
    <>
      <button onClick={myfunc}>increase</button>
      <span>{counts}</span>
      <button onClick={myfunc1}>decrease</button>
      <button onMouseOver={myfunc3}>{counts}</button>
    </>
  );
}
export default App;
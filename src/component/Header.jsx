import React, { useState } from 'react';

// Use of useState() was implemented in this code.
function Header(props) {
  const [name, setName] = useState(props.name);

  function handleClick(){
    setName("Main Bank of the Elites")
  }

  return (
    // Use of props and state was implemented in this code.
    <div className = "Header">
      <h1 onClick={handleClick}>{name}</h1>
    </div>
  )
}

export default Header;


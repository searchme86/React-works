import React from 'react';

function Content() {
  const handleChangeName = () => {
    const names = ['apple', 'candy', 'orange'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log('you clicked it');
  };

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleChangeName()}!</p>
      <button onClick={handleClick}>Click it</button>
      <button
        onClick={() => {
          handleClick2('rohkore');
        }}
      >
        Click it
      </button>
      <button
        onClick={(e) => {
          handleClick3(e);
        }}
      >
        Click it
      </button>
    </main>
  );
}

export default Content;

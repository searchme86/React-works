import React from 'react';

function Content() {
  const handleChangeName = () => {
    const names = ['apple', 'candy', 'orange'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <main>
      <p>Hello {handleChangeName()}!</p>
    </main>
  );
}

export default Content;

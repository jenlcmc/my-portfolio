import React, { useState, useEffect } from 'react';

const cowArts = [
  `      \\     ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,
  `       \\     ^__^
         \\  (@@)\\_______
            (__)\\       )\\/\\
             U  ||----w |
                ||     ||`,
  `           \\ ^__^
         \\  (--)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,

  `       \\ 
         \\ 
      .--. 
     |o_o | 
     |:_/ | 
    //   \\ \\ 
   (|     | ) 
  /'\\_   _/\`\\ 
  \\___)=(___/`,
];

const CowSay = ({ message }: { message?: string }) => {
  // State to store the cow art
  const [cowArt, setCowArt] = useState('');

  // Select a random cow art on initial render
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * cowArts.length);
    setCowArt(cowArts[randomIndex]);
  }, []);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '100%' }}
    >
      {message && (
        <div
          style={{
            marginBottom: 4,
            color: '#00fff7',
            fontFamily: 'JetBrains Mono, monospace',
            textAlign: 'center',
            fontSize: 'clamp(10px, 2.5vw, 14px)',
            padding: '0 8px',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          {message}
        </div>
      )}
      <pre
        style={{
          color: '#00fff7',
          fontFamily: 'JetBrains Mono, monospace',
          textAlign: 'center',
          fontSize: 'clamp(8px, 2vw, 12px)',
          maxWidth: '100%',
          overflow: 'hidden',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          margin: '0 auto',
          padding: '0 4px',
        }}
      >
        {cowArt}
      </pre>
    </div>
  );
};

export default CowSay;

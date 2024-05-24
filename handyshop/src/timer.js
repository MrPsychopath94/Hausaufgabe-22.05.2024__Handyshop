import React, { useState, useEffect } from 'react';

function Timer({ style }) {
  const [remainingTime, setRemainingTime] = useState(Math.floor(Math.random() * 1000)); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId); 
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, []); 

  return (
    <div style={style}>
      {`Noch ${remainingTime} Sekunden verfügbar`}
    </div>
  );
}

export default Timer;

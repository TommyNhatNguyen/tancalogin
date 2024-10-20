import {useEffect, useRef, useState} from 'react';

export function useTimer(seconds = 0, minutes = 0, hours = 0, delay = 1000) {
  const totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;
  const [counter, setCounter] = useState(totalSeconds);
  let timer = useRef<any>();

  useEffect(() => {
    setCounter(totalSeconds);

    let countTimer = setInterval(() => {
      setCounter(prev => --prev);
    }, delay);

    timer.current = setTimeout(() => {
      clearInterval(countTimer);
    }, (totalSeconds + 1) * 1000);

    return () => {
      clearTimeout(timer.current);
      clearInterval(countTimer);
    };
  }, [totalSeconds, delay]);
  return counter;
}

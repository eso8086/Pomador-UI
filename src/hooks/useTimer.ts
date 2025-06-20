import {useCallback, useEffect, useRef, useState} from "react";

export enum TimerStatus {
  PLAYING,
  PAUSED
}

export default function useTimer(){
  const timestamp = useRef(
    (()=>{
      const d = new Date;
      d.setSeconds(0);
      d.setMinutes(0);
      return d;
    })()
  );

  const getDateString = useCallback(()=>{
    return `${timestamp.current.getMinutes()}:${timestamp.current.getSeconds()}`;
  }, []);

  const [seconds, setSeconds] = useState(0);
  const [status, setStatus] = useState(TimerStatus.PAUSED);
  const [date, setDate] = useState(getDateString)


  useEffect(()=>{

    setDate(getDateString);
    timestamp.current.setSeconds(seconds);

    if(status == TimerStatus.PLAYING){

      const id = setInterval(()=>{
        setSeconds(seconds+1);
      }, 100);

      return ()=>{
        clearInterval(id)
      }
    }

  }, [status, seconds, getDateString]);

  function toggle(){
    if(status == TimerStatus.PLAYING){
      setStatus(TimerStatus.PAUSED)
    }
    if(status == TimerStatus.PAUSED){
      setStatus(TimerStatus.PLAYING)
    }
  }

  function reset(){
    setSeconds(0);
    setStatus(TimerStatus.PAUSED);
  }

  return {
    date,
    toggle,
    reset,
    status
  }
}
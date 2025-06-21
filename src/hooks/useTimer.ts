import {useCallback, useEffect, useState} from "react";
import useAudio from "./useAudio.ts";

export enum TimerStatus {
  PLAYING,
  PAUSED,
  COMPLETED
}

export default function useTimer(){

  const {play, stop} = useAudio("time_is_up");

  const [seconds, setSeconds] = useState(0);
  const [round, setRound] = useState(1)

  const getDateString = useCallback(()=>{
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s =  (seconds % 60).toString().padStart(2, "0");
    return `${m.padStart(2, "0")}:${s.padStart(2, "0")}`;
  }, [seconds]);

  const [status, setStatus] = useState(TimerStatus.PAUSED);
  const [time, setDate] = useState(getDateString)


  useEffect(()=>{
    setDate(getDateString);

    let id: number;

    if(status == TimerStatus.PLAYING){
      id = setInterval(()=>{
        setSeconds(seconds+1);
      }, 1000);
    }

    if(status != TimerStatus.COMPLETED && seconds >= 60 * 20){
      play();
      setStatus(TimerStatus.COMPLETED);
    }

    return ()=>{
      clearInterval(id);
    }
  }, [status, seconds, getDateString, round]);

  function toggle(){
    if(status == TimerStatus.PLAYING){
      setStatus(TimerStatus.PAUSED)
    }
    if(status == TimerStatus.PAUSED){
      setStatus(TimerStatus.PLAYING)
    }
    if(status == TimerStatus.COMPLETED){
      stop();
      reset();
      setRound(round + 1)
      setStatus(TimerStatus.PLAYING);
    }
  }

  function reset(){
    setSeconds(0);
    setStatus(TimerStatus.PAUSED);
  }

  return {
    time,
    toggle,
    reset,
    status,
    round,
  }
}
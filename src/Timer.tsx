import useTimer, {TimerStatus} from "./hooks/useTimer.ts";

export default function Timer(){
  const {date, reset, toggle, status} = useTimer()

  return (
    <>
      <p>{date}</p>
      <button onClick={toggle}>{status == TimerStatus.PLAYING ? "pause" : "play"}</button>
      <br/>
      <button onClick={reset}>reset</button>
    </>
  )
}
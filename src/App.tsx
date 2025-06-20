import Timer from "./Timer.tsx";
import Button from "./Button.tsx"
import useTimer, {TimerStatus} from "./hooks/useTimer.ts";

import styles from "./App.module.css";

function App() {
  const {time, reset, round, toggle, status} = useTimer();

  let btnMsg = "start";
  switch(status){
    case TimerStatus.PLAYING:
      btnMsg = "stop"
      break;
    case TimerStatus.COMPLETED:
      btnMsg = "next";
      break;
  }


  return (
    <div>
      <main>
        <Timer time={time}/>
        <div className={styles.timerControls}>
          <p className={styles.roundCount}>Round: {round}</p>
          <Button onClick={toggle}>{btnMsg}</Button>
        </div>
      </main>
    </div>
  )
}

export default App

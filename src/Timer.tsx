import styles from "./Timer.module.css"


type Props = {
  time: string
}

export default function Timer({time}: Props){
  return (
      <p className={styles.time}>
        <time>{time}</time>
      </p>
  )
}
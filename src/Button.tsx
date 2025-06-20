import type {ButtonHTMLAttributes, PropsWithChildren} from "react";
import styles from "./Button.module.css"

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export default function Button({children, onClick}: Props){
  return (
    /* TODO: maybe a typescript trick to pass all HTMLButtonElement related props??? */
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}
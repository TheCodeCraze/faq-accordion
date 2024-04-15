import { useState } from "react";
import styles from "../styles/Accordion.module.css";

export function Accordion({ id, question, answer, total }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top} onClick={handleClick}>
        <h2 className={styles.title}>{question}</h2>
        <img
          src={click ? "icon-minus.svg" : "icon-plus.svg"}
          alt={click ? "minimize accordion" : "expand accordion"}
          className="icon"
        />
      </div>
      {click ? <div className={styles.bottom}>{answer}</div> : null}
      {id !== total ? <hr className={styles.line} /> : null}
    </div>
  );
}

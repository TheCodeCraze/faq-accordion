import styles from "../styles/App.module.css";
import { Accordion } from "./Accordion";
import { accordionData } from "../data";

export function App() {
  return (
    <main className={styles.container}>
      <div className={styles.top}>
        <img src="icon-star.svg" alt="star icon" className={styles.icon} />
        <h1 className={styles.title}>FAQs</h1>
      </div>
      <div className={styles.bottom}>
        {accordionData &&
          accordionData.map((item) => (
            <Accordion key={item.id} {...item} total={accordionData.length} />
          ))}
      </div>
    </main>
  );
}

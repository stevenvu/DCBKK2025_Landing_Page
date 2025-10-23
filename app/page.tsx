import styles from "./page.module.css";
import { KanbanBoard } from "./components/KanbanBoard";

export default function Home() {
  return (
    <main className={styles.main}>
      <KanbanBoard />
    </main>
  );
}

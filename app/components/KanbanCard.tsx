"use client";

import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import styles from "./KanbanCard.module.css";
import type { Task } from "./types";

type KanbanCardProps = {
  task: Task;
};

export function KanbanCard({ task }: KanbanCardProps) {
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1
  };

  return (
    <article ref={setNodeRef} style={style} className={styles.card} {...attributes} {...listeners}>
      <header className={styles.header}>
        <span className={styles.title}>{task.title}</span>
      </header>
      {(task.assignee || task.dueDate) && (
        <footer className={styles.footer}>
          {task.assignee && <span className={styles.assignee}>{task.assignee}</span>}
          {task.dueDate && <span className={styles.dueDate}>{task.dueDate}</span>}
        </footer>
      )}
    </article>
  );
}

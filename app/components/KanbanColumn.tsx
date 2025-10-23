"use client";

import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import styles from "./KanbanColumn.module.css";
import { KanbanCard } from "./KanbanCard";
import type { Column, Task } from "./types";

type KanbanColumnProps = {
  column: Column;
  tasks: Task[];
};

export function KanbanColumn({ column, tasks }: KanbanColumnProps) {
  const { setNodeRef, isOver } = useDroppable({ id: column.id });

  return (
    <section
      ref={setNodeRef}
      className={`${styles.column} ${isOver ? styles.isOver : ""}`.trim()}
      aria-labelledby={`${column.id}-title`}
    >
      <header className={styles.header}>
        <h2 id={`${column.id}-title`} className={styles.title}>
          {column.title}
        </h2>
        <span className={styles.count}>{tasks.length}</span>
      </header>
      <SortableContext items={column.taskIds} strategy={verticalListSortingStrategy}>
        <div className={styles.tasks}>
          {tasks.map((task) => (
            <KanbanCard key={task.id} task={task} />
          ))}
        </div>
      </SortableContext>
    </section>
  );
}

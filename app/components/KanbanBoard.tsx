"use client";

import { DndContext, DragEndEvent, DragOverlay, DragOverEvent, DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import styles from "./KanbanBoard.module.css";
import { KanbanCard } from "./KanbanCard";
import { KanbanColumn } from "./KanbanColumn";
import type { BoardState, Column, Task } from "./types";

type KanbanBoardContextValue = {
  board: BoardState;
  updateBoard: (updater: (state: BoardState) => BoardState) => void;
};

const KanbanBoardContext = createContext<KanbanBoardContextValue | undefined>(undefined);

function useKanbanBoard() {
  const context = useContext(KanbanBoardContext);
  if (!context) {
    throw new Error("useKanbanBoard must be used within KanbanBoard");
  }
  return context;
}

const initialBoard: BoardState = {
  tasks: {
    "task-1": { id: "task-1", title: "Define success metrics", assignee: "Asha", dueDate: "Apr 28" },
    "task-2": { id: "task-2", title: "Draft onboarding walkthrough", assignee: "Miguel" },
    "task-3": { id: "task-3", title: "Set up Supabase schema", assignee: "Asha" },
    "task-4": { id: "task-4", title: "Implement drag & drop interactions", assignee: "Jules", dueDate: "May 2" },
    "task-5": { id: "task-5", title: "Record stakeholder demo" }
  },
  columns: [
    { id: "col-backlog", title: "Backlog", taskIds: ["task-1", "task-2"] },
    { id: "col-in-progress", title: "In Progress", taskIds: ["task-3", "task-4"] },
    { id: "col-done", title: "Done", taskIds: ["task-5"] }
  ]
};

type KanbanBoardProps = {
  initialState?: BoardState;
};

export function KanbanBoard({ initialState = initialBoard }: KanbanBoardProps) {
  const [board, setBoard] = useState<BoardState>(initialState);
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8
      }
    })
  );

  const tasks = board.tasks;
  const columns = board.columns;

  const updateBoard = useCallback((updater: (state: BoardState) => BoardState) => {
    setBoard((current) => {
      const next: BoardState = {
        tasks: { ...current.tasks },
        columns: current.columns.map((column) => ({ ...column, taskIds: [...column.taskIds] }))
      };
      return updater(next);
    });
  }, []);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveTaskId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) {
      setActiveTaskId(null);
      return;
    }

    if (active.id === over.id) {
      setActiveTaskId(null);
      return;
    }

    updateBoard((draft) => {
      const sourceColumn = draft.columns.find((column) => column.taskIds.includes(active.id as string));
      const targetColumn = draft.columns.find((column) => column.taskIds.includes(over.id as string) || column.id === over.id);

      if (!sourceColumn || !targetColumn) {
        return draft;
      }

      const sourceIndex = sourceColumn.taskIds.indexOf(active.id as string);
      sourceColumn.taskIds.splice(sourceIndex, 1);

      if (targetColumn.id === over.id) {
        targetColumn.taskIds.push(active.id as string);
      } else {
        const targetIndex = targetColumn.taskIds.indexOf(over.id as string);
        targetColumn.taskIds.splice(targetIndex, 0, active.id as string);
      }

      return draft;
    });

    setActiveTaskId(null);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) {
      return;
    }

    updateBoard((draft) => {
      const sourceColumn = draft.columns.find((column) => column.taskIds.includes(active.id as string));
      const targetColumn = draft.columns.find((column) => column.taskIds.includes(over.id as string) || column.id === over.id);

      if (!sourceColumn || !targetColumn || sourceColumn === targetColumn) {
        return draft;
      }

      sourceColumn.taskIds = sourceColumn.taskIds.filter((taskId) => taskId !== active.id);

      if (targetColumn.id === over.id) {
        targetColumn.taskIds.push(active.id as string);
      } else {
        const targetIndex = targetColumn.taskIds.indexOf(over.id as string);
        targetColumn.taskIds.splice(targetIndex, 0, active.id as string);
      }

      return draft;
    });
  };

  const activeTask: Task | undefined = activeTaskId ? tasks[activeTaskId] : undefined;

  const boardContextValue = useMemo<KanbanBoardContextValue>(() => ({ board, updateBoard }), [board, updateBoard]);

  return (
    <KanbanBoardContext.Provider value={boardContextValue}>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <section className={styles.board}>
          <header className={styles.boardHeader}>
            <div>
              <h1 className={styles.heading}>FlowTrack Kanban</h1>
              <p className={styles.subheading}>Track work from backlog to done with lightweight drag & drop.</p>
            </div>
            <button className={styles.addButton} type="button">
              + New Task
            </button>
          </header>
          <SortableContext items={columns.map((column) => column.id)}>
            <div className={styles.columns}>
              {columns.map((column) => (
                <KanbanColumn key={column.id} column={column} tasks={column.taskIds.map((id) => tasks[id])} />
              ))}
            </div>
          </SortableContext>
        </section>
        <DragOverlay>{activeTask ? <KanbanCard task={activeTask} /> : null}</DragOverlay>
      </DndContext>
    </KanbanBoardContext.Provider>
  );
}

export function useBoardState(): BoardState {
  return useKanbanBoard().board;
}

export function useColumn(columnId: string): Column | undefined {
  return useKanbanBoard().board.columns.find((column) => column.id === columnId);
}

export function useTask(taskId: string): Task | undefined {
  return useKanbanBoard().board.tasks[taskId];
}

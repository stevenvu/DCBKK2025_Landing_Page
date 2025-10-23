export type Task = {
  id: string;
  title: string;
  assignee?: string;
  dueDate?: string;
};

export type Column = {
  id: string;
  title: string;
  taskIds: string[];
};

export type BoardState = {
  tasks: Record<string, Task>;
  columns: Column[];
};

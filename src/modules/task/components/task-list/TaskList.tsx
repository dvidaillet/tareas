import { ITask } from "../../interface/Task";

export const TaskList = () => {
  const taskListToSShow: ITask = [
    {
      name: "Primera tarea",
      description: "descripcion primera tarea",
      completed: false,
    },
    {
      name: "2 tarea",
      description: "descripcion tarea 2",
      completed: true,
    },
    {
      name: "3 tarea",
      description: "descripcion tarea 3",
      completed: false,
    },
  ];

  return (
    <div>
      <h1>Lista de tareas</h1>
    </div>
  );
};

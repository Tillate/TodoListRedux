import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TasksList = (props) => {
  const tasks = useSelector((state) => state.todo);
  return (
    <>
      {tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
          toggleTask={tasks.toggleTask}
          deleteTask={tasks.deleteTask}
        />
      ))}
    </>
  );
};

export default TasksList;

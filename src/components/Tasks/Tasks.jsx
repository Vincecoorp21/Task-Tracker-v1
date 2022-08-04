import Task from '../Task/Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  //definir estado inicial //

  return (
    // setTasks([...tasks,{}])
    <>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        ></Task>
      ))}
    </>
  );
};

export default Tasks;

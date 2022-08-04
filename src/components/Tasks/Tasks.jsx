import Task from '../Task/Task';

const Tasks = ({ tasks, onDelete }) => {
  //definir estado inicial //

  return (
    // setTasks([...tasks,{}])
    <>
      {tasks.map(task => (
        <Task key={task.id} task={task} onDelete={onDelete}></Task>
      ))}
    </>
  );
};

export default Tasks;

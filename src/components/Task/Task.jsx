import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete }) => {
  // console.log(task);
  // const onClick = () => {
  //   console.log('delete');
  // };
  return (
    <div className='task'>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;

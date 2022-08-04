import { useState } from 'react';

const Addtask = ({ onAdd }) => {
  //Definimos los 3 estados iniciales de los campos del formulario.
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  //4. No podemos llamar a onAdd directamnete...//
  const onSubmit = e => {
    e.preventDefault();
    if (!text) {
      alert('Please add task');
      return;
    }
    onAdd({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={e => setText(e.target.value)}
          //en el momento que detecte un cambio en el form, nos cambia el estado. Por eso utilizamos onChange.
        ></input>
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={e => setDay(e.target.value)}
          //en el momento que detecte un cambio en el form, nos cambia el estado. Por eso utilizamos onChange.
        ></input>
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={e => setReminder(e.currentTarget.checked)}
          //Ponemos ésto porque es un checkbox
          //***1. Una vez completado esto nos vamos a App.js para crear la función ***************//
        ></input>
      </div>
      <input type='submit' value='Save Task' className='btn btn-block'></input>
    </form>
  );
};

export default Addtask;

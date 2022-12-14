// import React from 'react';
import { useState } from 'react';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';
import Addtask from './components/AddTask/Addtask';

function App() {
  //ShowADDTASK

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: '2th March',
      reminder: true,
    },
    {
      id: 2,
      text: 'Match Time',
      day: '10th March',
      reminder: false,
    },
    {
      id: 3,
      text: 'Dinner with John RP',
      day: '15th March',
      reminder: true,
    },
  ]);

  // 2. Venimos de AddTask
  const addTask = task => {
    //como no tenemos un Backend tenemos que crear un id aleatorio para la nueva tarea//
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    //Re-renderizamos el estado, mostramos las tasks que ya teníamos más la nueva que hemos creado.
  };
  //3. Vamos a return y se lo pasamos por parametro a AddTask

  //DELETE A TASK//

  const deleteTask = id => {
    //actualiza el estado, me filtra si la task.id es diferente del id
    setTasks(tasks.filter(task => task.id !== id));
    //no quiero mostrar la task con el id porque la estamos borrando. Te muestra aquellas que tienen un id distinto del que le haces click.
  };

  //TOGGLE REMINDER ---- //

  const toggleReminder = id => {
    setTasks(
      // aquí lo que hace es que si el id que le pasamos coinicide con el que le estamos clickando, entonces le cambiamos el reminder. Pasa de true a false o al revés. Si no coincide el id, entonces nos devuelve la tarea(que es lo quye está detrás del punto.) Cogemos tasks porque estamos atacando al estado con el userState. //
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header
        title='Task Tracker'
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask ? <Addtask onAdd={addTask} /> : ''}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks to Show'
      )}
    </div>
  );
}

// CLASS FORM ---------//

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>;
//   }
// }

//CSS en JS //
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'blue',
// };

export default App;

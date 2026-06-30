import { useState } from 'react';
function TasksTable({ userInfo }) {
  return (
    <div className="Comment">
      <p><b>Mis Tareas</b></p>
      <div>
        <label id="input-bar">
        </label>


      </div>
    </div>
  );
}
function TaskList({ userInfo, eliminarTarea }) {
  const [editingId, setEditingId] = useState(null);
  return (
    <>
      {userInfo.length === 0 ? (
        <p>No hay tareas.</p>
      ) : (
        userInfo.map(user => (
          <div key={user.id}>
            <input type="checkbox" className="taskCheck" />
            {user.id === editingId ? (
                    <input
                      type="text"
                      onDoubleClick={(event) => { setEditing(true) }}
                    />
                  ) : (
                <p onDoubleClick={() => setEditingId(user.id)}>
                    {user.text}
                 
              <button className="delete-button" type="submit" onClick={() => eliminarTarea(user.id)}>X</button>
              </p>
            )
          }
          </div>
        ))
      )}
    </>
  )
}
/*
function AlternarEdit({userInfo,activarEdit}) {

  const [editing, setEditing] = useState(false);

  return (
    <>
      {editing ?(
          <input
            type="text"
            onDoubleClick={(event) => {setEditing(true)}}
          />

      ) : (
          <p onDoubleClick={() => setEditingId(userInfo.id)}>
            {userInfo.text}
          </p>
      )
      }
    </>
  );
}
*/
function AddTask({ onAddTask }) {

  const [taskText, setTaskText] = useState("");

  const handleClick = () => {
    if (taskText.trim()) {
      onAddTask(taskText);
    }
  };

  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setTaskText(event.target.value);
        }} />
      <button onClick={handleClick}>
        Añadir
      </button>
    </>
  );
}


function App() {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      text: texto

    };

    setTasks([
      ...tasks,
      nuevaTarea
    ]);
  };
  const eliminarTarea = (id) => {
    const nuevasTareas = tasks.filter(
      task => task.id !== id
    );

    setTasks(nuevasTareas);
  };
  const activarEdit = () => {
    setEditing(true);
  };

  console.log(tasks);
  return (
    <div>
      <TasksTable userInfo={tasks} />
      <AddTask onAddTask={handleAddTask}
      />
      <TaskList userInfo={tasks}
        eliminarTarea={eliminarTarea}
      />


    </div>

  )
}

/*
    <AlternarEdit userInfo={tasks}
      activarEdit={activarEdit}
    />*/
export default App;



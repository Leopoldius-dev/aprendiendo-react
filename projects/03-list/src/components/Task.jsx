import React from 'react';

const Task = ({ task, deleteTask }) => {
    return (
        <li>
            {task}
            <button onClick={deleteTask}>Eliminar</button>
        </li>
    );
};

export default Task;

import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Añadir nuevo producto"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Añadir</button>
        </form>
    );
};

export default TaskForm;

import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react';

import styles from './TaskForm.module.css'

// interface

import { ITask } from '../interfaces/Task'

export interface IAppProps {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, taskList, setTaskList}: IAppProps) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [dificulty, setDificulty] = useState<number>(0)  

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() *1000)

    const newTask: ITask = {id, title, dificulty}

    setTaskList!([...taskList, newTask])

    setTitle("")
    setDificulty(0)
  }
 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
        setTitle(e.target.value)

    } else {
        setDificulty(parseInt(e.target.value))
    }
  }

  return (
    <div>
      <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
            <label htmlFor="title">Título:</label>
            <input type="text" name='title' placeholder='Título da tarefa'onChange={handleChange} value={title}/>
        </div>
        <div className={styles.input_container}>
            <label htmlFor="title">Dificuldade:</label>
            <input type="text" name='difficulty' placeholder='Dificuldade da tarefa'onChange={handleChange} value={dificulty}/>
        </div>
        <input type="submit" value={btnText} />
      </form>
    </div>
  );
}

export default TaskForm

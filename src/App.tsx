import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import styles from "./App.module.css"
import  TaskForm  from './components/TaskForm';
import { TaskList } from './components/TaskList';

// interface

import { ITask } from './interfaces/Task'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar tarefa' taskList={taskList} setTaskList={setTaskList}/>
          <div>
            <h2>Suas tarefas:</h2>
            <TaskList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

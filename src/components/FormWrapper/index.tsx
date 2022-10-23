


import emptyTableIcon from '../../assets/empty-to-do-icon.svg'

import styles from './styles.module.scss'

import { ToDoTable } from "../TodoTable";
import { InsertInput } from '../InsertInput'
import { ITaskItem } from '../../interface/interface';
import { useEffect, useState } from 'react';

function renderEmptyTable() {
    return (
        <div className={styles.emptyTableWrapper}>
            <div className={styles.emptyTableContent}>
                <img src={emptyTableIcon} alt="Empty Table" />
                <p> Você ainda não tem tarefas cadastradas</p>
                <p> Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}

export function FormWrapper() {
    const [tasksList, setTasksList] = useState<ITaskItem[]>([]);
    const [completedTasks, setCompletedTasks] = useState<ITaskItem[]>([]);

    const newTaskId = getNewTaksID();

    function addTask(newTaks: ITaskItem) {
        setTasksList([...tasksList, newTaks]);
    }

    function deleteTask(taksId: number) {
        const _tasksList = tasksList.filter(i => i.id !== taksId);
        let _completedTasks = tasksList.filter(i => i.completed === true && i.id !== taksId);
        setCompletedTasks(_completedTasks)
        setTasksList(_tasksList);
    }

    function getNewTaksID(): number {
        let taskPosition = tasksList.length - 1;
        let task = tasksList[taskPosition]
        let newTaksId = tasksList.length === 0 ? 1 : task.id + 1
        return newTaksId;
    }

    function updateTask(taskId: number) {
        const _tasksList = tasksList;
        let taskToUpdateIndex = _tasksList.findIndex((i: ITaskItem) => i.id === taskId)
        let taskToUpdate = taskToUpdateIndex > -1 ? _tasksList[taskToUpdateIndex] : null
        if (taskToUpdate !== null) {
            taskToUpdate.completed === true ? taskToUpdate.completed = false : taskToUpdate.completed = true;
            let _completedTasks = tasksList.filter(i => i.completed === true);
            setCompletedTasks(_completedTasks)
            setTasksList(_tasksList)

        } else return
    }

    return (
        <div className={styles.formWrapper}>
            <div className={styles.inputFormWrapper}>
                <InsertInput
                    addTask={addTask}
                    newTaskId={newTaskId}
                />
            </div>
            {tasksList.length === 0 &&
                renderEmptyTable() ||
                <ToDoTable
                    updateTask={updateTask}
                    taskList={tasksList}
                    completedTasksSum={completedTasks.length}
                    deleteTask={deleteTask} />
            }
        </div>
    );
}


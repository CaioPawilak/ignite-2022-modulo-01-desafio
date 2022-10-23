import { useState } from 'react';
import trashIcon from '../../assets/trashIcon.svg'
import { ITaskItem, IToDoItemProps } from '../../interface/interface';

import styles from './styles.module.scss'

export function ToDoItem(props: IToDoItemProps) {
    const [isTaskChecked, setIsTaskChecked] = useState<boolean>(props.task.completed);

    function handleCheck() {

        isTaskChecked ? setIsTaskChecked(false) : setIsTaskChecked(true)
        props.updateTask(props.task.id)
    }
    function onDeleteTask(taskId: number){
        props.deleteTask(taskId)
    }

    return (
        <div className={styles.rowWrapper}>
            <div className={styles.contentWrapper}>
                <div className={styles.inputWrapper}>
                    <input
                        className={styles.check}
                        id={props.task.id.toString()}
                        type="checkbox"
                        onChange={handleCheck}
                        checked={isTaskChecked} />

                    <label htmlFor={props.task.id.toString()}></label>
                    <p>{props.task.message}</p>
                </div>
                <button onClick={()=>{onDeleteTask(props.task.id)}} className={styles.deleteTaskButton}>
                    <img src={trashIcon}></img>
                </button>
            </div>
        </div>
    );
}


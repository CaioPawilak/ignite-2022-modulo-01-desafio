import { useState, FormEvent, ChangeEvent, InvalidEvent, useRef } from 'react';
import addIcon from '../../assets/plus.svg'
import { IInsertInput, ITaskItem } from '../../interface/interface';
import styles from './styles.module.scss'

export function InsertInput({ addTask, newTaskId }: IInsertInput) {
    console.log("Rederizei")
    const textRef = useRef<HTMLInputElement | null>(null);

    function handleCreateTask(event: FormEvent) {
        event.preventDefault();

        const newTask: ITaskItem = {
            id: Number(newTaskId),
            message: textRef.current!.value,
            completed: false,
            publishedAt: new Date(Date.now()),
        }
        addTask?.(newTask);
        textRef.current!.value = ''
        debugger;
    }
    function handleNewInvalidComment(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Campo inválido');
    }

    return (
        <form onSubmit={handleCreateTask} className={styles.formContent}>
            <input
                placeholder="Adicione uma nova tarefa"
                ref={textRef}
                onInvalid={handleNewInvalidComment}
                required
            />
            <button> Criar
                <img src={addIcon} alt="Adicionar Tarefa" />
            </button>
        </form>
    );
}




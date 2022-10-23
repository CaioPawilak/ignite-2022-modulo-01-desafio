import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';
import addIcon from '../../assets/plus.svg'
import { IInsertInput, ITaskItem } from '../../interface/interface';
import styles from './styles.module.scss'

export function InsertInput({ addTask, newTaskId }: IInsertInput) {

    const [taskDescriptionText, setTaskDescriptionText] = useState('');


    function handleCreateTask(event: FormEvent) {
        event.preventDefault();

        const newTask: ITaskItem = {
            id: Number(newTaskId),
            message: taskDescriptionText,
            completed: false,
            publishedAt: new Date(Date.now()),
        }
        addTask?.(newTask);
        setTaskDescriptionText('');

    }
    function handleCreateNewTaskDescription(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        event.target.setCustomValidity('');
        setTaskDescriptionText(event.target.value);

    }
    function handleNewInvalidComment(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Campo inválido');

    }

    return (
        <form onSubmit={handleCreateTask} className={styles.formContent}>
            <input
                placeholder="Adicione uma nova tarefa"
                onChange={handleCreateNewTaskDescription}
                value={taskDescriptionText}
                onInvalid={handleNewInvalidComment}
                required
            />
            <button>
                Criar
                <img src={addIcon} alt="Adicionar Tarefa" />
            </button>
        </form>
    );
}




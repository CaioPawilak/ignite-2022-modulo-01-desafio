import { ITaskItem, ITodoTableProps } from '../../interface/interface';
import { TableHeader } from '../TableHeader';
import { ToDoItem } from '../TodoItem';
import styles from './styles.module.scss'



export function ToDoTable(props: ITodoTableProps) {


    return (
        <div className={styles.tableWrapper}>
            <div className={styles.headerTableWrapper}>
                <TableHeader
                    title={'Tarefas criadas'}
                    tasksSum={props.taskList.length}
                    titleColor={'#4EA8DE'}
                />
                <TableHeader
                    title={'Concluídas'}
                    completedTasksSum={props.completedTasksSum}
                    tasksSum={props.taskList.length}
                    titleColor={'#8284FA'}
                    finishedTasksHeader={true}
                />
            </div>
            {props.taskList.map((task: ITaskItem) =>
                <div key={task.id}>
                    <ToDoItem
                        task={task}
                        updateTask={props.updateTask}
                        deleteTask={props.deleteTask} />
                </div>
            )}
        </div>
    );
}



import { ITableHeaderProps } from '../../interface/interface';
import styles from './styles.module.scss'

export function TableHeader(props: ITableHeaderProps) {

    return (
        <div className={styles.propsTitleWrapper}>
            <span className={styles.title} style={{ color: props.titleColor }}>{props.title}</span>
            {props.finishedTasksHeader &&
                <div className={styles.total} style={{'width': '5.2rem'}}>{props.completedTasksSum} de {props.tasksSum} </div>
                || <div className={styles.total} style={{'width': '2.4rem'}}>{props.tasksSum} </div>
            }
        </div>
    );
}


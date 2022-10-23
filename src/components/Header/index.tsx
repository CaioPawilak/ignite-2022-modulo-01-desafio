import styles from './styles.module.scss'
import Logo from '../../assets/logo.svg'

export function Header() {
    return (
        <div className={styles.headerWrapper}>
          <img
            src={Logo} alt="" />
        </div>
    );
}

 
import { type JSX, type ReactNode } from "react";
import styles from './SideBar.module.css';

type SideBarProps = {
    children: ReactNode;
}

const SideBar = ({children}:SideBarProps):JSX.Element =>{
    return (
        <aside className={styles.aside}>
            {children}
        </aside>
    );
}

export default SideBar;
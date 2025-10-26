import { useState, type JSX, type ReactNode } from "react";
import styles from './SideBar.module.css';
import MenuToggle from "@/components/ui/MenuToggle";

type SideBarProps = {
    children: ReactNode;
}

const SideBar = ({ children }: SideBarProps): JSX.Element => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(prev => !prev);
    };
    
    return (
        <div className={styles.contain}>
            {menuOpen && (<aside className={styles.aside}>
                {children}
            </aside>)}
            <MenuToggle
                isOpen={menuOpen}
                onClick={handleToggle}
                type="chevron"
                variant="info"
                size="small"
            />

        </div>

    );
}

export default SideBar;
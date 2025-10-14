import type { JSX, ReactNode } from "react";
import styles from "./Page.module.css";
import Footer from "../Footer";


type PageProps = {
    children: ReactNode;
};

const Page = ({ children }: PageProps): JSX.Element => {
    return (
       <div>
        <div className={styles.main}>
            {children}
        </div>
        <Footer/>
       </div>
    );
}

export default Page;
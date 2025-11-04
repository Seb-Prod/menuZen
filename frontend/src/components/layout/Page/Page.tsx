import type { JSX, ReactNode } from "react";
import styles from "./Page.module.css";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import { useDevice } from "@/context/Device";


type PageProps = {
    children: ReactNode;
};

const Page = ({ children }: PageProps): JSX.Element => {
    const { isMobilePWA } = useDevice();
    
    return (
       <div>
        {!isMobilePWA && <Navbar/>}
        
        <div className={styles.main} data-mobile={isMobilePWA}>
            {children}
        </div>
        
        {isMobilePWA ? <Navbar/> : <Footer/>}
       </div>
    );
}

export default Page;
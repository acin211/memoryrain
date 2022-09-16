import classNames from "classnames";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={classNames(styles.footer, "width-setter")}>
            <div className={styles.grid}>
                <div className={styles.gridItem}>
                    <div className={styles.gridTitle}>
                        <i className={classNames(styles.telIco, styles.ico)}></i>
                        Tel
                    </div>
                    <div className={styles.gridContent}>010-3620-5446</div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.gridTitle}>
                        <i className={classNames(styles.emailIco, styles.ico)}></i>
                        Email
                    </div>
                    <div className={styles.gridContent}>acin211@gmail.com</div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.gridContent}>© 2023 by MemoryRain</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import classNames from "classnames";
import React from "react";
import styles from "../../styles/Theme/Head.module.css";

const HeadSection = () => {
    return (
        <>
            <div className={styles.container}>
                <figure className={styles.imageContainer}>
                    <source src="/images/theme-head.jpg" alt="theme-head" />
                </figure>
                <div className={classNames(styles.title, "width-setter")}>테마 소개 • 예약</div>
            </div>
        </>
    );
};

export default HeadSection;

import classNames from "classnames";
import Link from "next/link";
import boardList from "../../data/boardList";
import styles from "../../styles/Board/main.module.css";

const MainBoard = () => {
    return (
        <>
            <div className={classNames(styles.container, "width-setter")}>
                <div className={styles.wrapper}>
                    <div className={styles.boardHead}>공지사항</div>
                    <div className={styles.boardItemContainer}>
                        {boardList.map((boardItem, i) => (
                            <Link key={boardItem.id} href={`/board/${boardItem.id}`}>
                                <div className={styles.boardItem}>
                                    <div className={styles.boardIndex}>{i + 1}</div>
                                    <div className={styles.boardTitle}>{boardItem.title}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainBoard;

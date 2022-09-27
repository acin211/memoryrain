import classNames from "classnames";
import Link from "next/link";
import boardList from "../../data/boardList";
import styles from "../../styles/Board/board.module.css";

const BoardComp = ({ boardId }) => {
    const boardInfo = boardList.filter((b) => b.id * 1 === boardId * 1)[0];

    return boardInfo ? (
        <>
            <div className={classNames(styles.container, "width-setter")}>
                <div className={styles.wrapper}>
                    <div className={styles.boardTitle}>{boardInfo.title}</div>
                    <div className={styles.boardBody}>{boardInfo.body}</div>
                    <div className={styles.toList}>
                        <Link href="/board">
                            <button>목록으로</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <>Loading...</>
    );
};

export default BoardComp;

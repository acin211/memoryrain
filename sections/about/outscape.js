import classNames from "classnames";
import styles from "../../styles/About/outscape.module.css";
import topStyle from "../../styles/About/main.module.css";

const OutScape = () => {
    return (
        <div className={styles.container}>
            <div className={styles.figure}>
                <div className={styles.dim}></div>
                <div className={styles.bg}></div>
            </div>
            <div className={classNames("width-setter", topStyle.textContainer)}>
                <div className={topStyle.title}>
                    야외방탈출이란?
                    <br />
                    OUTSCAPE GAMES
                </div>
                <div className={topStyle.body}>
                    <div className={topStyle.paragraph}>
                        실내에서만 이루어지던 기존의 방탈출과 달리
                        <br />
                        관광지의 이곳 저곳을 누비며 지형지물, 조형물,
                        <br />
                        공간 등을 활용하여 만들어진 문제를 풀며
                        <br />
                        스토리의 미션을 해결해나가는 신개념 방탈출
                    </div>
                    <div className={topStyle.paragraph}>
                        랜드마크를 여기 저기 돌아다니며
                        <br />
                        관광지의 새로운 매력을 발견하고
                        <br />
                        즐거운 추억을 만드는 이색 컨텐츠 입니다.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutScape;

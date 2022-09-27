import classNames from "classnames";
import styles from "../../styles/About/memoryRain.module.css";
import topStyle from "../../styles/About/main.module.css";

const MemoryRain = () => {
    return (
        <div className={classNames(topStyle.containers, "width-setter")}>
            <div className={classNames(styles.figure, topStyle.image)}>
                <div className={styles.dim}></div>
                <div className={styles.bg}></div>
            </div>
            <div className={classNames(topStyle.textContainer)}>
                <div className={topStyle.title}>About Memory Rain</div>
                <div className={topStyle.body}>
                    <div className={topStyle.paragraph}>
                        '​추억'이라는 비를 맞다.
                        <br />
                        당신은 하나의 추억을 담은 비를 맞습니다.
                        <br />
                        비를 맞은 당신은 새로운 이야기 속에 잠깁니다.
                    </div>
                    <div className={topStyle.paragraph}>
                        메모리레인은 한 가지 고민으로 시작되었습니다.
                        <br />
                        가장 몰입하여 즐길 수 있는 방탈출은 무엇일까?
                        <br />
                        몰입을 높일 수 있는 탄탄한 스토리 라인, 개연성에 맞는 문제 활용
                        <br />
                        그 고민의 답을 '밖'에서 찾았습니다.
                        <br />
                    </div>
                    <div className={topStyle.paragraph}>영화 속 주인공이 된 것만 같은 느낌을 직접 느껴보세요.</div>
                </div>
            </div>
        </div>
    );
};

export default MemoryRain;

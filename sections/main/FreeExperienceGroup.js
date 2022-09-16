import classNames from "classnames";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home/FEG.module.css";

const FreeExperienceGroup = () => {
    return (
        <section className={styles.container}>
            <div className={styles.background}>
                <div className={styles.imageContainer}>
                    <div className={classNames(styles.topDim, styles.dim)}></div>
                    <img src="/images/apply.jpg" alt="image" className={classNames(styles.mImg, "mobile-only")} />
                    <img src="/images/apply-pc.jpg" alt="image" className={classNames(styles.pImg, "pc-only")} />
                    <div className={classNames(styles.bottomDim, styles.dim)}></div>
                </div>
            </div>
            <div className={classNames("width-setter", styles.textContainer)}>
                <div className={styles.head}>무료체험단 신청안내</div>
                <div className={styles.contents}>
                    <div className={styles.content}>
                        여러분의 많은 관심과 사랑속에 드디어 <b>메모리레인</b>의 첫 번째 테마가 부산 광안리에 10월 오픈 예정입니다!
                    </div>
                    <div className={styles.content}>
                        아래 양식을 통해 체험단 신청을 해주신 분들께는
                        <br />
                        추첨을 통하여 오픈 전 사전 체험을 위한
                        <br />
                        '테마 무료 이용권'을 제공해드립니다.
                    </div>
                    <div className={styles.content}>
                        ​무료체험 후기 작성, 이벤트 수신 동의 등 강제되는 행동 전혀 없습니다!
                        <br />
                        ​방탈출을 사랑하는 모든 분들의 많은 지원 부탁드립니다.
                    </div>
                </div>
                <div className={styles.warns}>
                    <div className={styles.warn}>※ ​체험단 이벤트는 조기마감 될 수 있습니다.</div>
                    <div className={styles.warn}>
                        ※ 해당 정보 수집은 체험단 당첨 시 공지 및 서비스 제공안내를 위한 목적이며,
                        <br />
                        각종 이벤트/광고성 문자는 보내지 않으니 안심하시고 신청부탁드립니다.
                    </div>
                </div>
                <div className={styles.btnApply}>
                    <button>
                        <Link href="https://app.catchsecu.com/project/659a6dfe7e06a0a/form" target="_blank">
                            신청하기
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FreeExperienceGroup;

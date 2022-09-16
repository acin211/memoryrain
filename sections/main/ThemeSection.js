import React from "react";
import styles from "../../styles/Home/Theme.module.css";
import classNames from "classnames";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Link from "next/link";
import theme from "../../data/theme";

const ThemeSection = () => {
    return (
        <section className={styles.container}>
            <Swiper className={classNames(styles.mySwiper, "home-swiper")} modules={[Pagination, Navigation]} navigation={true} pagination={{ clickable: true }} slidesPerView={1} spaceBetween={25}>
                {theme.map((t, i) => (
                    <SwiperSlide className={styles.swiperItem} key={i}>
                        <img src={t.src} alt={t.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={classNames("width-setter", styles.theme)}>
                <div className={classNames(styles.textContainer, "pc-only")}>
                    <div className={classNames(styles.head)}>세상에 단 하나뿐인 이야기</div>
                    <div className={classNames(styles.content)}>
                        평범한 일상에 특별함을 한방울 뿌린
                        <br />
                        메모리레인만의 테마 속으로 스며드세요.
                    </div>
                </div>
                <div className={styles.btnSurf}>
                    <button>
                        <Link href="/theme">테마 둘러보기</Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ThemeSection;

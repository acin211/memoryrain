import classNames from "classnames";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import styles from "../../styles/Home/Main.module.css";

const MainSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (sectionRef.current) {
            const section = sectionRef.current;
            const head = section.querySelector(".head");
            const subHead = section.querySelector(".subHead");
            const scroll = section.querySelector(".scroll");
            const sideText = section.querySelectorAll(".side-text");
            const sideLine = section.querySelectorAll(".side-line");

            const tl = gsap.timeline().addLabel("start");

            tl.to(
                [head, subHead],
                {
                    autoAlpha: 1,
                    ease: "power1.inOut",
                    duration: 0.8,
                },
                "start"
            )
                .addLabel("lineStart", "<+=.4")
                .to(
                    sideText,
                    {
                        left: 0,
                        right: 0,
                        autoAlpha: 1,
                        ease: "power2.inOut",
                        stagger: 0.6,
                        duration: 0.8,
                    },
                    "lineStart"
                )
                .to(
                    sideLine,
                    {
                        left: 0,
                        right: 0,
                        autoAlpha: 1,
                        ease: "power2.inOut",
                        stagger: 0.6,
                        duration: 0.8,
                    },
                    "lineStart"
                )
                .addLabel("endAni", ">-=.2")
                .to(
                    scroll,
                    {
                        autoAlpha: 1,
                        duration: 0.5,
                        ease: "power1.inOut",
                    },
                    "endAni"
                );
        }
    }, []);

    return (
        <section className={styles.main} ref={sectionRef}>
            <div className={styles.background}>
                <div className={styles.whiteFilter}></div>
                <img src="/images/main.jpg" alt="background" />
            </div>
            <div className={classNames(styles.text, "width-setter")}>
                <div className={classNames(styles.head, "head")}>Memory Rain</div>
                <div className={classNames(styles.subhead, "subHead")}>'추억'이라는 비를 맞다.</div>
                <div className={classNames(styles.textWithLine, "text-with-line", styles.line1)}>
                    <div className={classNames(styles.sideText, "side-text")}>부산 야외 방탈출카페</div>
                    <div className={classNames(styles.sideLine, "side-line")}></div>
                </div>
                <div className={classNames(styles.textWithLine, "text-with-line", styles.line2)}>
                    <div className={classNames(styles.sideLine, "side-line")}></div>
                    <div className={classNames(styles.sideText, "side-text")}>Busan Outdoor Mission Game</div>
                </div>
            </div>
            <div className={classNames(styles.scroll, "scroll")}>SCROLL</div>
        </section>
    );
};

export default MainSection;

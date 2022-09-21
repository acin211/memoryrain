import styles from "../../styles/Theme/ThemeList.module.css";
import theme from "../../data/theme";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ThemeListSection = () => {
    const [open, setOpen] = useState(false);
    const infoRef = useRef(null);
    const modalRef = useRef(null);

    const openModal = (info) => {
        const modal = modalRef.current;
        if (modal) {
            const tl = gsap.timeline().addLabel("set");
            document.body.classList.add("no-scroll");

            tl.set(
                modal,
                {
                    display: "flex",
                },
                "set"
            ).addLabel("start");

            const dim = modal.querySelector(".dim");
            gsap.killTweensOf(dim, "autoAlpha");
            tl.to(
                dim,
                {
                    autoAlpha: 1,
                    ease: "power1.inOut",
                    duration: 0.2,
                },
                "start"
            ).addLabel("endDim", ">");

            const content = modal.querySelector(".content");
            gsap.killTweensOf(content, "autoAlpha");
            tl.addLabel("startContent", "endDim-=.1").to(
                content,
                {
                    autoAlpha: 1,
                    ease: "power1.inOut",
                    duration: 0.2,
                },
                "startContent"
            );
        }
    };

    const closeModal = (info) => {
        const modal = modalRef.current;
        if (modal) {
            document.body.classList.remove("no-scroll");
            const tl = gsap.timeline().addLabel("start");

            const content = modal.querySelector(".content");
            gsap.killTweensOf(content, "autoAlpha");
            tl.to(
                content,
                {
                    autoAlpha: 0,
                    ease: "power1.inOut",
                    duration: 0.2,
                },
                "content"
            ).addLabel("contentEnd", ">");

            const dim = modal.querySelector(".dim");
            gsap.killTweensOf(dim, "autoAlpha");
            tl.addLabel("dimStart", "contentEnd-=.1")
                .to(
                    dim,
                    {
                        autoAlpha: 0,
                        ease: "power1.inOut",
                        duration: 0.2,
                    },
                    "dimStart"
                )
                .addLabel("modalSet", ">+=.1");

            tl.set(
                modal,
                {
                    display: "none",
                },
                "modalSet"
            );
        }
    };

    const handleOpen = (value, info) => {
        setOpen(value);
        infoRef.current = info;
    };

    useEffect(() => {
        if (open) {
            openModal(infoRef.current);
        } else {
            closeModal(infoRef.current);
        }
    }, [open]);

    const handleClickRange = (e) => {
        console.log(e.target);
        if (e.target.classList.contains("dim") || e.target.classList.contains("close")) {
            handleOpen(false, infoRef.current);
        }
    };

    return (
        <>
            <div className={classNames(styles.modal, "width-setter")} ref={modalRef} onClick={handleClickRange}>
                <div className={classNames(styles.dim, "dim")}></div>
                <div className={classNames(styles.content, "content")}>
                    {infoRef.current && (
                        <>
                            <div className={classNames(styles.head)}>
                                <div>{infoRef.current.title}</div>
                                <div className={classNames(styles.close, "close")}>
                                    <i></i>
                                </div>
                            </div>
                            <div className={classNames(styles.mobileContainer, "mobile-only")}>
                                <div className={styles.mobileWrap}>
                                    <div className={styles.imageContainer}>
                                        <img src={infoRef.current.src} alt={infoRef.current.alt} />
                                    </div>
                                    <div className={styles.descriptionContainer}>{infoRef.current.description}</div>
                                    {infoRef.current.id !== -1 && (
                                        <div className={styles.buttonContainer}>
                                            <button>예약하기</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={classNames("pc-only", styles.pcContent)}>
                                <div className={styles.pcWrap}>
                                    <div className={styles.pcBook}>
                                        <div className={styles.imageContainer}>
                                            <img src={infoRef.current.src} alt={infoRef.current.alt} />
                                        </div>
                                        {infoRef.current.id !== -1 && (
                                            <div className={styles.buttonContainer}>
                                                <button>예약하기</button>
                                            </div>
                                        )}
                                    </div>
                                    <div className={styles.descriptionContainer}>{infoRef.current.description}</div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className={classNames(styles.container, "width-setter")}>
                {theme.map((info) => (
                    <div className={styles.themeItem} key={info.id} onClick={() => handleOpen(true, info)}>
                        <div className={styles.posterContainer}>
                            <img src={info.src} alt={info.alt} />
                        </div>
                        <div className={styles.posterTitle}>{info.title}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ThemeListSection;

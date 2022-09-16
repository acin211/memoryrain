import styles from "../../styles/Nav.module.css";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navOpen = (hamburger, sideNav) => {
    document.body.classList.add("no-scroll");

    const line1 = hamburger.querySelector(".line-1");
    const line2 = hamburger.querySelector(".line-2");
    const line3 = hamburger.querySelector(".line-3");

    gsap.killTweensOf([line1, line2, line3]);
    const tl = gsap.timeline().addLabel("start");

    tl.to(
        line1,
        {
            top: "50%",
            y: "-50%",
            ease: "power1.in",
            duration: 0.15,
        },
        "start"
    )
        .to(
            line3,
            {
                top: "-50%",
                y: "50%",
                ease: "power1.in",
                duration: 0.15,
            },
            "start"
        )
        .addLabel("line-overlap", ">")
        .set(
            line2,
            {
                opacity: 0,
            },
            "line-overlap"
        )
        .addLabel("rotate-start", ">")
        .to(
            line1,
            {
                rotate: "45deg",
                scaleX: 0.8,
                duration: 0.3,
                ease: "power1.out",
            },
            "rotate-start"
        )
        .to(
            line3,
            {
                rotate: "-45deg",
                scaleX: 0.8,
                duration: 0.3,
                ease: "power1.out",
            },
            "rotate-start"
        );

    const dim = sideNav.querySelector(".dim");
    const slide = sideNav.querySelector(".slide");
    const sideNavTl = gsap.timeline().addLabel("setting");
    gsap.killTweensOf(sideNav);

    sideNavTl
        .set(
            sideNav,
            {
                autoAlpha: 1,
            },
            "setting"
        )
        .addLabel("start")
        .to(
            slide,
            {
                left: "80px",
                ease: "power1.out",
                duration: 0.35,
            },
            "start"
        )
        .to(
            dim,
            {
                opacity: 1,
                ease: "power1.inOut",
                duration: 0.3,
            },
            "start"
        );
};

const navClose = (hamburger, sideNav) => {
    document.body.classList.remove("no-scroll");

    const line1 = hamburger.querySelector(".line-1");
    const line2 = hamburger.querySelector(".line-2");
    const line3 = hamburger.querySelector(".line-3");

    gsap.killTweensOf([line1, line2, line3]);
    const tl = gsap.timeline().addLabel("start");

    tl.addLabel("start", ">")
        .to(
            line1,
            {
                rotate: "0",
                scaleX: 1,
                duration: 0.2,
                ease: "power1.in",
            },
            "start"
        )
        .to(
            line3,
            {
                rotate: "0",
                scaleX: 1,
                duration: 0.2,
                ease: "power1.in",
            },
            "start"
        )
        .addLabel("line-arrange", ">")
        .set(
            line2,
            {
                opacity: 1,
            },
            "line-arrange"
        )
        .to(
            line1,
            {
                top: "0",
                y: "0",
                ease: "power1.out",
                duration: 0.2,
            },
            "line-arrange"
        )
        .to(
            line3,
            {
                top: "0",
                y: "0",
                ease: "power1.out",
                duration: 0.2,
            },
            "line-arrange"
        );

    const dim = sideNav.querySelector(".dim");
    const slide = sideNav.querySelector(".slide");
    const sideNavTl = gsap.timeline().addLabel("start");
    gsap.killTweensOf(sideNav);

    sideNavTl
        .to(
            slide,
            {
                left: "100%",
                ease: "power1.out",
                duration: 0.3,
            },
            "start"
        )
        .to(
            dim,
            {
                opacity: 0,
                duration: 0.3,
                ease: "power1.inOut",
            },
            "start"
        )
        .addLabel("setting", ">")
        .to(
            sideNav,
            {
                autoAlpha: 0,
            },
            "setting"
        );
};

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const hamburgerRef = useRef(null);
    const sideNavRef = useRef(null);

    const handleNavOpen = () => {
        setIsOpen((open) => !open);
    };

    useEffect(() => {
        const hamburger = hamburgerRef.current;
        const sideNav = sideNavRef.current;
        if (isOpen) {
            navOpen(hamburger, sideNav);
        } else {
            navClose(hamburger, sideNav);
        }
    }, [isOpen]);

    return (
        <>
            <nav className={styles.nav}>
                <div className={classNames("width-setter", styles.container)}>
                    <Link href="/">
                        <div className={styles.logo}></div>
                    </Link>
                    <div className={classNames(styles.hamburger, "mobile-only")} onClick={handleNavOpen} ref={hamburgerRef}>
                        <span className={classNames(styles.line1, styles.line, "line-1")}></span>
                        <span className={classNames(styles.line2, styles.line, "line-2")}></span>
                        <span className={classNames(styles.line3, styles.line, "line-3")}></span>
                    </div>
                </div>
            </nav>
            <div className={styles.sideNav} ref={sideNavRef}>
                <div className={classNames(styles.dim, "dim")}></div>
                <div className={classNames(styles.slide, "slide")}></div>
            </div>
        </>
    );
};

export default Nav;

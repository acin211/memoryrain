import Head from "next/head";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Memoryrain</title>
                <meta name="language" content="ko" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="메모리레인 부산 야외방탈출" />
                <meta property="og:description" content="세상에 단 하나뿐인 이야기 속으로, 부산 야외 방탈출 카페 메모리레인" />
                <meta property="og:url" content="http://www.memoryrain.kr" />
                <meta name="description" content="세상에 단 하나뿐인 이야기 속으로, 부산 야외 방탈출 카페 메모리레인" />
                <meta name="keywords" content="메모리레인 MEMORYRAIN 방탈출카페 야외방탈출 부산방탈출 광안리방탈출 서면방탈출 경대방탈출" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="naver-site-verification" content="69448b23a1271e9acf5e2a6095cf52d5748cd12d" />
            </Head>
            <Nav />
            <main style={{ minHeight: "calc(100vh - 320px)" }}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;

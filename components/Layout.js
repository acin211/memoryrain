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
                <meta property="og:title" content="메모리레인 부산 광안리" />
                <meta property="og:description" content="부산 야외 방탈출 카페, 광안리 방탈출 카페, 일상에 특별함을 뿌린 테마 게임" />
                <meta property="og:url" content="http://www.memoryrain.kr" />
                <meta name="description" content="부산 야외 방탈출 카페, 광안리 방탈출 카페, 일상에 특별함을 뿌린 테마 게임" />
                <meta name="keywords" content="메모리레인 부산 광안리 프리미엄 롤플레잉 카페" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main style={{ minHeight: "calc(100vh - 240px)" }}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;

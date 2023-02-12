import React, {useEffect} from 'react';
import DGB from '@/component/common/DGB';
import Box from "@mui/material/Box";
import Toolbar from '@mui/material/Toolbar';
import Header from "@/component/layout/Header";
import MainMenu from "@/component/layout/MainMenu";
import Footer from "@/component/layout/Footer";
import Modal from "@/component/common/Modal";
import Popup from "@/component/common/Popup";

export default function Contents ({ children, pageProps }) {
    const DGB_COMMON = DGB();

    // 뒤로가기 호출시 처리
    useEffect(() => {
        window.addEventListener('popstate', ()=>{DGB_COMMON.goBack()});
        return () => {
            window.removeEventListener('popstate', ()=>{DGB_COMMON.goBack()});
        }
    },[]);

    // 페이지 mounted 시 호출됨
    useEffect(() => {
        let currnetPath = location.pathname;
        console.error("currnetPath :: " + DGB_COMMON.getSvcId())

        // 화면이 로드되는 시점에 pushState를 하여 브라우저 히스토리 생성
        history.pushState(null, '타이틀', currnetPath);

        // mounted 처리후 child component의 init 함수호출
        //childFunc.current();

        return() => {
            console.warn("unmounted path :: " + currnetPath);
        }
    });

    return (
        <>
            <Header></Header>
            <MainMenu></MainMenu>

            <Box component="main" sx={{ p: 1 }}>
                <Toolbar />
                {children}
            </Box>

            <Footer></Footer>

            <Modal></Modal>
            <Popup></Popup>
        </>
    )
}
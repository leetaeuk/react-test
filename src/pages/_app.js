import Contents from "@/component/layout/Contents";

import {RecoilRoot} from "recoil";


export default function App ({ Component, pageProps, match }) {
    // 화면의 기본적인 레이아웃 처리
    return (
        <RecoilRoot>
            <Contents>
                <Component
                    {...pageProps}
                >
                </Component>
            </Contents>
        </RecoilRoot>
    )
}
import Router from "next/router";
import React from "react";
import * as History from '@/component/common/History';
import {useRecoilState} from "recoil";
import {modalState,popupState} from "@/component/recoil/Atom";

const DGB = () => {
    /**
     * 메인페이지 이동
     * @param url
     * @constructor
     */
    const goMain = () => {
        console.error("goMain")
        History.init();
        Router.replace("/");
    }

    /**
     * 페이지 이동
     * @param url
     * @constructor
     */
    const location = (svcId, paramJson, options, isBack) => {
        console.error("location")
        let currentPageId   = location.pathname;
        let isHashChange    = false;

        if( options != null )
        {
            // 페이지 로케이션 여부
            if( options.isHashChange === true )
            {
                isHashChange = true;
            }
        }

        // 뒤로가기 처리시 hash정보가 남아있으면 show 처리만 한다.
        if( isHashChange )
        {
        }

        // 뒤로가기로 들어온 경우 히스토리가 존재하면 히스토리값만 변경
        if( isBack )
        {
            // 히스토리 변경(현재페이지정보, 이동할페이지정보, 파라미터정보, 옵션)
            History.change(svcId, paramJson, options);
            Router.replace(svcId).then(r => {
            });
        }
        // 정상 location의 경우 히스토리 추가
        else
        {
            // 히스토리 추가(현재페이지정보, 이동할페이지정보, 파라미터정보, 옵션)
            History.add(currentPageId, svcId, paramJson, options);
            Router.replace(svcId).then(r => {
            });
        }
    }

    /**
     * 뒤로가기
     * @param svcId
     * @param options
     */
    const locationBack = (svcId, paramJson, options) => {
        console.error("locationBack")
        /*
        let pageInfo = DPT.com.getCurrentPageInfo();

        // 팝업이 떠있는 상태에서 뒤로가기를 눌렀을 경우에는 팝업을 닫아준다.
        if( pageInfo.PAGE_TYPE == "popup" )
        {
            //DPF.com.closePopup();
            return;
        }
        */

        // 서비스 아이디가 존재하는 경우(여러단계를 건너띄고 back하는 경우)
        if( svcId )
        {
            // 넘겨준 서비스아이디를 찾을때까지 히스토리 array를 search한 후 삭제하고 찾은 정보를 리턴
            let lastSvcInfo = History.removeFindSvcId(svcId);

            let param = {};
            let opt   = {};
            if( lastSvcInfo != null && lastSvcInfo != undefined )
            {
                param = lastSvcInfo.PARAMETER;
                if( paramJson )
                {
                    param = paramJson;
                }

                opt = lastSvcInfo.OPTIONS;
                if( options )
                {
                    opt = options;
                }
            }

            // 페이지이동
            location(svcId, param, opt, true);
        }
        // 서비스 아이디가 없는 경우(한단계 이전으로 돌아가는 경우)
        else
        {
            // 히스토리정보가 1개 이상 존재하는 경우
            if( History.getHistorySize() > 0 )
            {
                // 맨 마지막 히스토리 1개만 삭제 후 이전페이지 정보 세팅
                let afterPopSvcInfo = History.pop();

                // 이전으로 갈 정보가 없으면 메인화면으로 이동처리
                if( afterPopSvcInfo == null || afterPopSvcInfo == undefined )
                {
                    // 메인페이지 이동
                    goMain();
                }
                else
                {
                    // 이전페이지 이동
                    location(afterPopSvcInfo.SVC_ID, afterPopSvcInfo.PARAMETER, afterPopSvcInfo.OPTIONS, true);
                }
            }
            // 히스토리정보가 없는경우는 메인으로 이동
            else
            {
                // 메인페이지 이동
                goMain();
            }
        }
    }

    /**
     * 뒤로가기 처리
     */
    const goBack = () => {
        console.error("goBack")
        locationBack(History.getLastSvcInfo().CURRENT_PAGE_ID);
    }

    /**
     * 모달창 열기
     * @constructor
     */
    const [modal, setModal] = useRecoilState(modalState);
    const openModal = () => {
        console.error("openModal")
        setModal(true);
    }

    /**
     * 모달창 닫기
     * @constructor
     */
    const closeModal = () => {
        console.error("closeModal")
        setModal(false);
    }


    /**
     * 팝업창 열기
     * @constructor
     */
    const [popup, setPopup] = useRecoilState(popupState);
    const openPopup = () => {
        console.error("openPopup")
        setPopup(true);
    }

    /**
     * 팝업창 닫기
     * @constructor
     */
    const closePopup = () => {
        console.error("closePopup")
        setPopup(false);
    }

    /**
     * 현재 서비스 아이디 가져오기
     * @returns {string|*}
     */
    const getSvcId = () => {
        const svcInfo = History.getLastSvcInfo();
        return svcInfo == null ? "" : History.getLastSvcInfo().SVC_ID;
    }
    const getSvcType = () => {
    }

    return {
        goMain,
        location,
        locationBack,
        openModal,
        closeModal,
        openPopup,
        closePopup,
        goBack,
        getSvcId,
        getSvcType,
    };
}

export default DGB;
import React from 'react'
import DGB from '@/component/common/DGB';
import * as History from "@/component/common/History";

export default function Test(props, ref) {
    /*props.init.current = function() {
        console.log("onload test1")
    }*/

    console.log("onload test1")
    const DGB_COMMON = DGB()
    let dat = JSON.stringify(History.getAllHistory());
    return (
        <>
            <div>{dat}</div>
            <a onClick={()=>{DGB_COMMON.location("/test/test2", {data:"test2"})}}>test2</a>
        </>
    )
}
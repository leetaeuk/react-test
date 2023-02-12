import React from 'react'
import DGB from '@/component/common/DGB';
import * as History from "@/component/common/History";

export default function Test(props, ref) {
    /*props.init.current = function() {
        console.log("onload test")
    }*/
    const DGB_COMMON = DGB()
    let dat = JSON.stringify(History.getAllHistory());
    console.log("onload test", dat)
    return (
        <>
            <div>{dat}</div>
            <a onClick={()=>{DGB_COMMON.location("/test/test1", {data:"test1"})}}>test1</a>
        </>
    )
}
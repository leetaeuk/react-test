import React from 'react'
import * as DGB from '@/component/common/DGB';

export default function Popup(props, ref) {
    console.log("popup")
    let date = new Date();
    let dateTime = date.getFullYear() + "" + date.getMonth() + "" + date.getDay() + "" + date.getTime()
    return (
        <>
            {dateTime}
        </>
    )
}
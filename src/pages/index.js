import DGB from '@/component/common/DGB';
import React, { useState, useCallback } from "react";

const Index = (props, ref) => {
    console.log("onload index");

    const DGB_COMMON = DGB();

    return (
        <>
            <a onClick={() => {
                DGB_COMMON.location("/test/test", {data: "test"})
            }}>test</a>
            <br/>
            <a onClick={() => {
                DGB_COMMON.openModal(true)
            }}>openModal</a>
            <br/>
            <a onClick={() => {
                DGB_COMMON.openPopup(true);
            }}>openPopup</a>
        </>
    );
}

const equalComparison = (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export default React.memo(Index, equalComparison);
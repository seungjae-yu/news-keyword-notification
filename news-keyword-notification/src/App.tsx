import React from "react";
import KeywordContainer from "./container/keyword/KeywordContainer";
import { createGlobalStyle } from "styled-components";
import GlobalTemplate from "./styles/GlobalTemplate";
import SlideDrawerContainer from "./container/slide/SlideDrawerContainer";

const GlobalStype = createGlobalStyle`
    body{
        // background: #c8d8e4;
    }
`;

const App = () => {
    return (
        <div style={{ display: "flex" }}>
            <GlobalStype />
            <div style={{ width: "97%" }}>
                <GlobalTemplate>메인페이지</GlobalTemplate>
            </div>
            <div>
                <SlideDrawerContainer />
            </div>
        </div>
    );
};

export default App;

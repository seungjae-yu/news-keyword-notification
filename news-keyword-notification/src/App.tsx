import React from "react";
import KeywordContainer from "./container/keyword/KeywordContainer";
import { createGlobalStyle } from "styled-components";
import GlobalTemplate from "./styles/GlobalTemplate";
import SlideDrawerContainer from "./container/slide/SlideDrawerContainer";
import MenuBarContainer from "./container/menubar/MenuBarContainer";

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
                <GlobalTemplate>
                    <MenuBarContainer />
                </GlobalTemplate>
            </div>
            <div>
                <SlideDrawerContainer />
            </div>
        </div>
    );
};

export default App;

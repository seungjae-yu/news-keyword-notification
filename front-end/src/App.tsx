import React from "react";
import KeywordSettingContainer from "./container/keyword/KeywordContainer";
import { createGlobalStyle } from "styled-components";
import GlobalTemplate from "./styles/GlobalTemplate";
import SlideDrawerContainer from "./container/slide/SlideDrawerContainer";
import MenuBarContainer from "./container/menubar/MenuBarContainer";
import NavigatorContainer from "./container/navigator/NavigatorContainer";

const GlobalStype = createGlobalStyle`
    body{
        // background: #c8d8e4;
    }
`;

const App = () => {
    return (
        <div style={{ display: "flex" }}>
            <GlobalStype />
            <div style={{ width: "100%" }}>
                <GlobalTemplate>
                    <MenuBarContainer />
                    <NavigatorContainer />
                </GlobalTemplate>
            </div>
            {/* <div>
                <SlideDrawerContainer />
            </div> */}
        </div>
    );
};

export default App;

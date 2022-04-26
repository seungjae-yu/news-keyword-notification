import React from "react";
import HeaderContainer from "./container/menubar/HeaderContainer";
import MainContainer from "./container/main/MainContainer";

const mainDivStyle = {
    width: "100%",
};

const App = () => {
    return (
        <div>
            <div style={mainDivStyle}>
                <HeaderContainer />
                <main>
                    <MainContainer />
                </main>
            </div>
        </div>
    );
};

export default React.memo(App);

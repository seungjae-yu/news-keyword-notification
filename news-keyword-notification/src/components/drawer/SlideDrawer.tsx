import React from "react";
import { Divider, IconButton, Tooltip, Drawer } from "@material-ui/core";
import KeywordContainer from "../../container/keyword/KeywordContainer";
import { FilterList } from "@material-ui/icons";

interface Props {}

type Anchor = "keyword";

const SlideDrawer = ({}: Props) => {
    const [state, setState] = React.useState({
        keyword: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
        <div style={{ display: "flex" }} onClick={toggleDrawer(anchor, true)}>
            {anchor === "keyword" ? (
                <div>
                    <KeywordContainer />
                </div>
            ) : (
                <div></div>
            )}
            <Divider />
        </div>
    );

    return (
        <div>
            {(["keyword"] as Anchor[]).map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)}>
                        {anchor === "keyword" ? (
                            <Tooltip title="키워드" placement="left" arrow>
                                <FilterList fontSize={"large"} />
                            </Tooltip>
                        ) : (
                            <div></div>
                        )}
                    </IconButton>
                    <Drawer
                        anchor={"left"}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};

export default SlideDrawer;

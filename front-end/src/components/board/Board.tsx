import React from "react";
import { TabPanel } from "../navigator/TabPanel";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import Article from "../article/Article";

interface Props {
    keywordIndex: number;
    keywordGroups: string[];
}

const Board = ({ keywordIndex, keywordGroups }: Props) => {
    const { newsItems } = useSelector((state: RootState) => state.newsReducer);
    const { keywordItems } = useSelector(
        (state: RootState) => state.keywordReducer
    );

    return (
        <div>
            <TabPanel value={keywordIndex} index={0}>
                {newsItems.map((newsItem) => (
                    <Article article={newsItem.items} />
                ))}
            </TabPanel>
            {/* <TabPanel value={keywordIndex} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={keywordIndex} index={2}>
                Item Three
            </TabPanel> */}
            {keywordItems.map((keyword, idx) => (
                <TabPanel value={keywordIndex} index={idx + 1}>
                    {newsItems
                        .filter(
                            (newsItem) =>
                                newsItem.keywordInfo?.keywordGroup ===
                                keywordGroups[idx]
                        )
                        .map((item) => (
                            <Article article={item.items} />
                        ))}
                </TabPanel>
            ))}
        </div>
    );
};

export default Board;

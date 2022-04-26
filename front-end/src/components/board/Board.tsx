import { TabPanel } from "../main/TabPanel";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import Article from "../article/Article";
import React from "react";

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
        <aside
            style={
                newsItems.length > 0
                    ? { height: "90vh", overflow: "scroll" }
                    : undefined
            }
        >
            <TabPanel value={keywordIndex} index={0}>
                {newsItems.map((newsItem) => (
                    <Article
                        article={newsItem.items}
                        key={"article-" + newsItem.id}
                    />
                ))}
            </TabPanel>

            {keywordItems.map((keyword, idx) => (
                <TabPanel
                    value={keywordIndex}
                    index={idx + 1}
                    key={keyword.keyword}
                >
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
        </aside>
    );
};

export default React.memo(Board);

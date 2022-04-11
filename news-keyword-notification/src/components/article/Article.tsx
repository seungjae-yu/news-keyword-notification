import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { ArticleData } from "../../@types/news-data-type";

interface Props {
    article: ArticleData[];
}

const Article = ({ article }: Props) => {
    return (
        <div>
            {article.map((article) => (
                <Card>
                    <CardContent>
                        <Typography variant="h6">
                            {"title : " + article.title}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="body2">
                            <div>{"date : " + article.pubDate}</div>
                            <div>{"description : " + article.description}</div>
                            <div>{"link : " + article.link}</div>
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Article;

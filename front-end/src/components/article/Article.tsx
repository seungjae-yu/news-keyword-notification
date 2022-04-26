import { Card, CardContent, Typography, Link } from "@material-ui/core";
import { ArticleData } from "../../@types/news-data-type";
import { StringApis } from "../../utils/dataUtils/stringApi";

interface Props {
    article: ArticleData[];
}

const Article = ({ article }: Props) => {
    return (
        <div>
            {article.map((article, idx) => (
                <Card variant="outlined" key={article.title + idx}>
                    <CardContent>
                        <Typography component={"span"} variant="body1">
                            <Link
                                href={article.link}
                                color="primary"
                                target="_blank"
                            >
                                {StringApis.RemoveHtmlTags(article.title)}
                            </Link>
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography component={"span"} variant="body2">
                            <div>{"date : " + article.pubDate}</div>
                            <div>
                                {"description : " +
                                    StringApis.RemoveHtmlTags(
                                        article.description
                                    )}
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Article;

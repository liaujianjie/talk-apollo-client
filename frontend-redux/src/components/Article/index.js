import React from "react";
import { Card } from "@blueprintjs/core";
import WithCommentsForArticleId from "../../containers/WithCommentsForArticleId";
import Comment from "../Comment";
import "./style.css";

const Article = ({ article }) => {
  return (
    <section className="Article">
      <Card>
        <article className="Article--content-container">
          <h2>{article.title}</h2>
          {article.body.split("\n").map((para, index) => (
            <p key={index}>{para}</p>
          ))}
          <span>Posted by User {article.ownerId}</span>
          <WithCommentsForArticleId articleId={article.id}>
            {keyedComments => {
              const comments = Object.values(keyedComments);
              return (
                <div>
                  <h3>{comments.length} comments</h3>
                  <div>
                    {comments.map(comment => (
                      <Comment comment={comment} />
                    ))}
                  </div>
                </div>
              );
            }}
          </WithCommentsForArticleId>
        </article>
      </Card>
    </section>
  );
};

export default Article;

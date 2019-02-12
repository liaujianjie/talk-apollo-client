"use strict";

const faker = require("faker");
const axios = require("axios");
const LOOPBACK_CONFIG = require("../server/config.json");

const { port: PORT, restApiRoot: API_ROOT } = LOOPBACK_CONFIG;

axios.defaults.baseURL = `http://localhost:${PORT}${API_ROOT}`;
axios.defaults.timeout = 2500;

const composeFakeArticle = () => ({
  title: faker.lorem.sentence(),
  body: faker.lorem.paragraphs(5)
});

const composeFakeCommentForArticleId = articleId => ({
  message: faker.lorem.paragraphs(1),
  articleId: articleId
});

const composeFakeUser = () => {
  const username = faker.internet.userName();
  return {
    username,
    email: `${username}@example.com`,
    password: "asdasd"
  };
};

const registerUser = user =>
  axios
    .post("/Users", user)
    .then(response => response.data)
    .then(user => {
      console.log(`Registered user: ${user.username} (${user.email})`);
      return user;
    });

const loginUser = user =>
  axios
    .post("/Users/login", user)
    .then(response => response.data)
    .then(access => {
      // console.log(
      //   `Logged in user "${user.username}" with access token "${access.id}"`
      // );
      return access;
    });

const publishArticle = (accessToken, article) =>
  axios
    .post(`/Articles?access_token=${accessToken}`, article)
    .then(response => response.data)
    .then(article => {
      console.log(`Published article: ${article.id}`);
      return article;
    });

const publishComment = (accessToken, comment) =>
  axios
    .post(`/Comments?access_token=${accessToken}`, comment)
    .then(response => response.data)
    .then(comment => {
      console.log(`Published comment: ${comment.id}`);
      return comment;
    });

(async () => {
  try {
    // Create users
    const users = await Promise.all(
      Array(5)
        .fill(null)
        .map(composeFakeUser)
        .map(async user => await registerUser(user))
    );

    // Get access token of users
    const accesses = await Promise.all(
      users
        .map(user => ({ username: user.username, password: "asdasd" }))
        .map(loginUser)
    );
    const accessTokens = accesses.map(access => access.id);
    const randomToken = () =>
      accessTokens[
        faker.random.number({ min: 0, max: accessTokens.length - 1 })
      ];

    // Create articles with user tokens
    const articles = await Promise.all(
      Array(5)
        .fill(null)
        .map(composeFakeArticle)
        .map(async article => await publishArticle(randomToken(), article))
    );

    // Create comments with user tokens
    await Promise.all(
      Array(3)
        .fill(null)
        .map(() =>
          articles
            .map(({ id: articleId }) =>
              composeFakeCommentForArticleId(articleId)
            )
            .map(async comment => await publishComment(randomToken(), comment))
        )
        .reduce((acc, promises) => [acc, ...promises])
    );

    const jianjie = await registerUser({
      username: "jianjie",
      email: "jianjie@example.com",
      password: "asdasd"
    });

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

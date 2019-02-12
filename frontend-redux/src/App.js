import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./style.css";

// Containers
import AuthGuard from "./containers/AuthGuard";
import WithArticles from "./containers/WithArticles";
import WithPublishArticle from "./containers/WithPublishArticle";

// Components
import Article from "./components/Article";
import CreateArticle from "./components/CreateArticle";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AuthGuard>
            <header>
              <h1>Articles</h1>
            </header>
            <div>
              <WithPublishArticle>
                {publishArticle => (
                  <CreateArticle createArticleHandler={publishArticle} />
                )}
              </WithPublishArticle>
              <WithArticles>
                {articles =>
                  Object.values(articles)
                    .sort((a, b) => b.id - a.id)
                    .map(article => (
                      <Article key={article.id} article={article} />
                    ))
                }
              </WithArticles>
            </div>
          </AuthGuard>
        </div>
      </Provider>
    );
  }
}

export default App;

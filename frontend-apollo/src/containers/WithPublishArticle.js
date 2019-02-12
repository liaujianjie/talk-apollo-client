import { connect } from "react-redux";
import { publishArticle } from "../actions/article";

const WithPublishArticle = ({ children, publishArticle }) =>
  children(publishArticle);

const mapDispatchToProps = {
  publishArticle
};

export default connect(
  null,
  mapDispatchToProps
)(WithPublishArticle);

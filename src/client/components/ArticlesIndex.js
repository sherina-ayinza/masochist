import React from 'react';
import {createPaginationContainer, graphql} from 'react-relay';
import inBrowser from '../inBrowser';
import ArticlePreview from './ArticlePreview';
import DocumentTitle from './DocumentTitle';
import LoadMoreButton from './LoadMoreButton';

if (inBrowser) {
  require('./ArticlesIndex.css');
}

const PAGE_SIZE = 10;

class ArticlesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }

  _handleLoadMore = () => {
    this.setState({isLoading: true}, () => {
      this._disposable = this.props.relay.loadMore(PAGE_SIZE, error => {
        this.setState({isLoading: this.props.relay.isLoading()});
        this._disposable = null;
      });
    });
  };

  componentWillUnmount() {
    if (this._disposable) {
      this._disposable.dispose();
      this._disposable = null;
    }
  }

  render() {
    return (
      <DocumentTitle title="wiki">
        <div>
          <h1>Wiki articles</h1>
          <table className="article-listing u-full-width">
            <thead>
              <tr>
                <th>What</th>
                <th>Title</th>
                <th>When</th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.articles.edges.map(({node}) => (
                <ArticlePreview key={node.id} data={node} />
              ))}
            </tbody>
          </table>
          {this.props.relay.hasMore()
            ? <LoadMoreButton
                isLoading={this.state.isLoading}
                onLoadMore={this._handleLoadMore}
              />
            : null}
        </div>
      </DocumentTitle>
    );
  }
}

const ArticlesIndexContainer = createPaginationContainer(
  ArticlesIndex,
  graphql`
    fragment ArticlesIndex on Root {
      articles(
        first: $count
        after: $cursor
      ) @connection(key: "ArticlesIndex_articles") {
        edges {
          node {
            id
            ...ArticlePreview
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `,
  {
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
      return {
        count,
        cursor,
      };
    },
    query: graphql`
      query ArticlesIndexQuery(
        $count: Int!
        $cursor: String
      ) {
        ...ArticlesIndex
      }
    `,
  },
);

ArticlesIndexContainer.PAGE_SIZE = PAGE_SIZE;

export default ArticlesIndexContainer;
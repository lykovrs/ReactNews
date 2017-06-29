// eslint-disable-next-line
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article.js';

export default class News extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  render() {
    const newsNodes = this
      .props
      .data
      .map((article, index) => {
        return (<Article key={index} article={article}/>)
      });

    return (
      <div>
        <ul className="news">
          {newsNodes}
        </ul>
        <strong
          className={this.props.data.length === 0
          ? 'none'
          : ''}>Всего новостей: {this.props.data.length}</strong>
      </div>
    )
  }
}

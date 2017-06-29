// eslint-disable-next-line
import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Article extends React.Component {
  static propTypes = {
    article: PropTypes.shape({
      author: PropTypes.string.isRequired, 
      text: PropTypes.string.isRequired, 
      bigText: PropTypes.string.isRequired
    })
  }

  constructor(props) {
    super(props);
    
    this.state = {
      visible: false
    };
   
    this.readmoreClick = this.readmoreClick.bind(this);
  }

  /**
   * Меняем сосотояние видимости
   * 
   * @param {any} e 
   * @memberof Article
   */
  readmoreClick(e){
    e.preventDefault();
    this.setState({visible: true}, console.log('Состояние изменилось'));
  }

  render() {
    const {text, author, bigText} = this.props.article;
    console.log('render',this);
    return (
      <li>
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
        <a href="" onClick={this.readmoreClick} className={'news__readmore ' + (this.state.visible ? 'none': '')}>Подробнее</a>
        <p className={'news__big-text ' + (this.state.visible ? '' : 'none')}>{bigText}</p>
      </li>
    )
  }

  
}
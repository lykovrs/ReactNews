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
      visible: false,
      counter: 0
    };
   
    this.readmoreClick = this.readmoreClick.bind(this);
    this.setIncrementCounter = this.setIncrementCounter.bind(this);
  }

  /**
   * Меняем сосотояние видимости
   * 
   * @param {any} e 
   * @memberof Article
   */
  readmoreClick(e){
    e.preventDefault();
    this.setState({visible: true});
  }

  /**
   * Метод подсчета кликов
   * 
   * @memberof Article
   */
  setIncrementCounter() {
    
    this.setState({
      counter: ++this.state.counter
    })
  }

  render() {
    const {text, author, bigText} = this.props.article;
    return (
      <li>
        <p className="news__author">{author}:</p>
        <p onClick={this.setIncrementCounter} className="news__text">{text} И считаем клики по фразе {this.state.counter}</p>
        <a href="" onClick={this.readmoreClick} className={'news__readmore ' + (this.state.visible ? 'none': '')}>Подробнее</a>
        <p className={'news__big-text ' + (this.state.visible ? '' : 'none')}>{bigText}</p>
      </li>
    )
  }

  
}
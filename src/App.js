import React, {Component} from 'react';
import EventEmitter from 'event-emitter';
import logo from './logo.svg';
import './App.css';
import {myNews} from './data.js'
import News from './components/News.js';
import Comments from './components/Comments.js';

class App extends Component {
  constructor(props) {
    super(props);
    window.ee = new EventEmitter();

    this.state = {
      news: myNews
    };

    this.componentDidMount = this
      .componentDidMount
      .bind(this);
    this.componentWillUnmount = this
      .componentWillUnmount
      .bind(this);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Новости</h2>
        </div>
        <News data={this.state.news}/>
        <Comments data={this.state.news}/>
      </div>
    );
  }

  componentDidMount() {
    /* Слушай событие "Создана новость"
      если событие произошло, обнови this.state.news
    */

    window
      .ee
      .on('News.add', (item) => {
        alert(item.author)
        let nextNews = [item].concat(this.state.news);
        this.setState({news: nextNews});
      });
  };
  componentWillUnmount() {
    /* Больше не слушай событие "Создана новость" */
    window
      .ee
      .off('News.add');
  };
}

export default App;

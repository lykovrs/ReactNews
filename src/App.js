import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import News from './components/News.js';
import Comments from './components/Comments.js';

const myNews = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Новости</h2>
        </div>
        <p className="App-intro">
          <button onClick={this.clear}>Очистить новости</button>
        </p>
        <News data={myNews}/>
        <Comments data={myNews}/>
      </div>
    );
  }

  clear() {
    console.log('clear')
    
  }
}

export default App;

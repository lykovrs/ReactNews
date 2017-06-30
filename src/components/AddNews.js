// eslint-disable-next-line
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class AddNews extends Component {
    static propTypes = {
        data: PropTypes.array
    }

    constructor(props) {
        super(props);

        this.state = {
            btnIsDisable: true,
            checkboxIsChecked: false,
            authorIsEmpty: true,
            textIsEmpty: true
        }

        this.alertAddNews = this
            .alertAddNews
            .bind(this);

        this.agreeWithRules = this
            .agreeWithRules
            .bind(this);

        this.onAuthorChange = this
            .onAuthorChange
            .bind(this);

        this.onTextChange = this
            .onTextChange
            .bind(this);
    }

    onAuthorChange(e) {
        if (e.target.value.trim().length > 0) {
            this.setState({authorIsEmpty: false})
        } else {
            this.setState({authorIsEmpty: true})
        }
    }
    onTextChange(e) {
        if (e.target.value.trim().length > 0) {
            this.setState({textIsEmpty: false})
        } else {
            this.setState({textIsEmpty: true})
        }
    }

    alertAddNews() {
        alert(`Заголовок новости: ${ReactDOM.findDOMNode(this.refs.authorName).value}
Текст новости: ${ReactDOM.findDOMNode(this.refs.bodyNews).value} 
`)
    }

    agreeWithRules() {
        console.log()
        this.setState({
            checkboxIsChecked: !this.state.checkboxIsChecked
        })
    }

    componentDidMount() {
        ReactDOM
            .findDOMNode(this.refs.authorName)
            .focus();
    }

    render() {
        return (
            <div>
                <p>
                    <input
                        className="test-input"
                        onChange={this.onAuthorChange}
                        type="text"
                        placeholder="Название новости"
                        ref="authorName"
                        defaultValue=""/>
                </p>
                <p>
                    <label>
                        <textarea
                            onChange={this.onTextChange}
                            placeholder="Текст новости"
                            ref="bodyNews"
                            defaultValue=""/>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            value={this.state.checkboxIsChecked}
                            onChange={this.agreeWithRules}
                            type="checkbox"/>
                        Я согласен с правилами
                    </label>
                </p>

                <button
                    disabled={!this.state.checkboxIsChecked || this.state.authorIsEmpty || this.state.textIsEmpty}
                    onClick={this.alertAddNews}>Добавить новость</button>
            </div>
        )
    }
};
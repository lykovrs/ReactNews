// eslint-disable-next-line
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Comments extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    }

    render() {
        if (!this.props.data.length) {
            return (
                <div className="comments">
                    Нет новостей - комментировать нечего.
                </div>
            )
        } else {
            return (
                <div className="comments">
                    Комментировать можно все.
                </div>
            )
        }

    }
};
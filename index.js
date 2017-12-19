import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';

export default class BaseIcon extends Component {
    render() {
        let {size, style, className} = this.props;
        let cls = classNames({
            'inline-svg-base': true,
            [className]: !!className
        });
        if (size) {
            style = {
                ...style,
                fontSize: size
            };
        }

        return (
            <i {...omit(this.props, ['size'])} style={style} className={cls} ></i>
        );
    }
}

Component.propTypes = {
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
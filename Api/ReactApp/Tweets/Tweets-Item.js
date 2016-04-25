'use strict';

const React = require('react');

// Stateless React Component
const Item = (props) => {
    return (<li className="list-group-item">
                {props.tweet.created_at + ' - ' + props.tweet.text}
            </li>);
};

module.exports = Item;
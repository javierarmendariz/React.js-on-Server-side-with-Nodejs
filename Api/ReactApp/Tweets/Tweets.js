'use strict';

const React = require('react');
const Store = require('./Tweets-Store');
const FluxDispatcher = require('../Dispatcher');
const Item =  React.createFactory(require('./Tweets-Item'));

// React Bootstrap
const ListGroup = require('react-bootstrap/lib/ListGroup');

class Tweets extends React.Component {

    constructor () {
        // Get the React Component Class Context and Initialize the State
        super();
        this.state = {
            tweets: this._getTweets()
        };
    }

    render() {
        // Create the Tweets
        let items = this.state.tweets.map((tweet, i) => {
            return <Item key={i} tweet={tweet} />;
        });

        return (
            <ListGroup componentClass="ul">
                {items}
            </ListGroup>
            );
    }

    componentDidMount () {
        // Flux unidirectional binding to refresh the list of Tweeks when the Store gets updated
        Store.on('CHANGE', this._onChange.bind(this));
    }

    _onChange () {
        this.setState(this._getTweets());
    }

    _getTweets () {
        return Store.getAll();
    }

}

module.exports = Tweets;

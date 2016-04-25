'use strict';

const React = require('react');
const Tweets = require('./Tweets/Tweets.js');

// React Bootstrap
const Grid = require('react-bootstrap/lib/Grid');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');

class App extends React.Component {
    render () {
        return <Grid>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Tweets />
                </Col>
            </Row>
        </Grid>;
    }
}

module.exports = App;
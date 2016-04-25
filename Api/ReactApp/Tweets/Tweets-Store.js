'use strict';

// Environment's variables
require('dotenv').config();

const FluxDispatcher = require('../Dispatcher');
const EventEmitter = require('events').EventEmitter;

// Twitter
const Twitter = require('twitter');
const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
let _tweets = [];
client.get('statuses/user_timeline', {screen_name: 'clevertech', count: 5}, function(error, tweets, response){
    _tweets = tweets;
});

// Store
const TweetsStore = Object.assign({}, EventEmitter.prototype, {
    getAll: function () {
        return _tweets;
    },
    readTweet:   function () {},
    createTweet: function () {
        this.emit('CHANGE');
    },
    updateTweet: function () {
        this.emit('CHANGE');
    },
    deleteTweet: function () {
        this.emit('CHANGE');
    }
});

// Store Dispatcher
FluxDispatcher.register(function (payload) {
    switch (payload.eventName) {
        case 'tweet.create':
            // Create Tweet implementation
        break;
        case 'tweet.read':
            // Get Tweet implementation
        break;
        case 'tweet.update':
            // Update Tweet implementation
        break;
        case 'tweet.delete':
            // Delete Tweet implementation
        break;
    }
});

module.exports = TweetsStore;
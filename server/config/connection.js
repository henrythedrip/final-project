const {connect, connection} = require('mongoose');

const connectionString = 'mongodb://127.0.1:27017/triviaDB';

connect(connectionString);

module.exports = connection;

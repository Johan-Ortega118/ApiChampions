const express = require('express');
const mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_DB_URL || 'mongodb+srv://admin:12345@cluster0.nkd1uqt.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000

module.exports = function() {
    let server = express();
    let create;
    let start;

    create = () => {
        let routes = require('../routes');
        server.set('port', PORT);

        mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        var db = mongoose.connection;

        !db ? console.info("Hubo un error conectandose a la base de datos") : console.log("Conexión a base de datos satisfactoria");

        routes.init(server);
    };


    start = () => {
        let port = server.get('port');

        server.listen(port, function() {
            console.log('http://localhost' + ':' + port);
        });
    };

    return {
        create: create,
        start: start
    };
};
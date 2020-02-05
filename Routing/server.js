let app = require('express')(),
    server = require('http').Server(app),
    bodyParser = require('body-parser'),
    express = require('express'),
    cors = require('cors'),
    http = require('http'),
    path = require('path');
app.use(cors());
let userRoute = require('./userRest');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', userRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next();
});
server.listen(3000, function() {
    console.log('app listening on port: 3000');
});

// const app = require("./backend/app");
// const debug = require("debug")("node-angular");
// const http = require("http");



// const normalizePort = val => {
//     var port = parseInt(val, 10);



//     if (isNaN(port)) {
//         return val;
//     }


//     if (port > 0) {
//         return port;
//     }



//     return false;
// };





// const onListening = () => {
//     const addr = server.address();
//     const bind = typeof port === "string" ? "pipe" + port : "port" + port
//     debug("Listeninig on " + bind);
// }



// const port = normalizePort(process.env.PORT || "3000");
// app.set("port", port);



// const server = http.createServer(app);
// //server.on("error", onError);
// server.on("listeninig", onListening);
// server.listen(port);
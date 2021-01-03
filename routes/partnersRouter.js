const express = require('express')
const partnersRouter = express.Router()

partnersRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next()
})

.get((req, res) => {
    res.end('Will send all the partners to you')
})

.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} containing description: ${req.body.description}`);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not suported on /partners')
})

.delete((req, res) => {
    res.end('Deleting all partners')
});

partnersRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next()
})

.get((req, res) => {
    res.end(`Will send all the partner ${req.partnerId} to you`)
})

.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} containing description: ${req.body.description}`);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not suported on /partnerId')
})

.delete((req, res) => {
    res.end('Deleting all partners')
});

module.exports = partnersRouter
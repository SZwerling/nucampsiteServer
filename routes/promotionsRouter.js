const express = require('express')
const promotionsRouter = express.Router()

promotionsRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next()
})

.get((req, res) => {
    res.end('Will send all the promotions to you')
})

.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} containing description: ${req.body.description}`);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not suported on /promotions')
})

.delete((req, res) => {
    res.end('Deleting all promotions')
});

promotionsRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next()
})

.get((req, res) => {
    res.end(`Will send the promotion ${req.promotionId} to you`)
})

.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} containing description: ${req.body.description}`);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not suported on /promotionId')
})

.delete((req, res) => {
    res.end(`Deleting promotion ${req.body.name}`)
});

module.exports = promotionsRouter

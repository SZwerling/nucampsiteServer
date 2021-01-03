const express = require('express')
const campsitesRouter = express.Router()

campsitesRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('Will send all the campsites to you')
})

.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} containing description: ${req.body.description}`);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('Put operation not suported on /campsitesId')
})

.delete((req, res) => {
    res.end('Deleting all campsites')
});

campsitesRouter.route('/:campsiteId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next()
})

.get((req, res) => {
    res.end(`Will send details of the campsite ${req.campsiteId} to you`)
})

.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.campsiteId}`)
})

.put((req, res) => {
    res.write(`Updating the campsite: ${req.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.name} 
    with description: ${req.body.description}`)
})

.delete((req, res) => {
    res.end(`Deleting campsite: ${req.campsiteId}`)
});

module.exports = campsitesRouter
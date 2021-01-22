const express = require('express');
const authenticate = require('../authenticate');
const multer = require('multer'); //multer helps process multi-part form data
const cors = require('./cors');

const storage = multer.diskStorage({  //customization for storage of uploads
    destination: (req, file, cb) => { //config settings
        cb(null, 'public/images');    //null for no error, then the path for saving
    },
    filename: (req, file, cb) => {   //filename to have original upload name from client
        cb(null, file.originalname)  //otherwise multer names it something random
    }
});

const imageFileFilter = (req, file, cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {  //regex fun! checks file ext.
        return cb(new Error('You can upload only image files!'), false);//false means reject
    }
    cb(null, true); //now know has correct image ext.
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter })

const uploadRouter = express.Router();  //this is the router, yep.

uploadRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end('Get operation not supported on /imageUpload');
})
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, upload.single('imageFile'),(req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.file);
})
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /imageUpload');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /imageUpload');
});

module.exports = uploadRouter;
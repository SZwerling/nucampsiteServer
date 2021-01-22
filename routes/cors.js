const cors = require('cors');


//whitelist as an array of string values, these resources okay
const whitelist = ['http://localhost:3000', 'https://localhost:3443'];
const corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    console.log(req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) { //check 'origin' in header against whitelist
        corsOptions = { origin: true };  //if origin was in whitelist, origin accepted
    } else {
        corsOptions = { origin: false }; //origin not in whitelist
    }
    callback(null, corsOptions); 
};

exports.cors = cors();  //returns middleware function to set cors header 
                        //of access control allow origin on res object, 
exports.corsWithOptions = cors(corsOptionsDelegate); //returns middleware function to 
                                                    //check request is on whitelist
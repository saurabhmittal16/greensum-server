const Customer = require('../models/customer');

exports.firstRoute = (req, res) => {
    return res.send({
        message: "Hello World"
    })
}
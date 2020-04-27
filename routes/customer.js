const controller = require('../controller/customer');

module.exports = [
    {
        method: 'GET',
        url: "/api/customer/first",
        handler: controller.firstRoute
    }
]
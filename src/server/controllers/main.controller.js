'use strict';
//in controllers/User
let controller = (req, res) => {

    res
        .status(200)
        .json({message: 'ok'})
}

module.exports = {
    route: '/api',
    controller: controller

}
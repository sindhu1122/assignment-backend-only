const models = require('../models');

// const createActivity = async (req, res, next) => {
//     try {
        
//         const activity = await models.Activity.create(req.body)
//         res.status(201).json({
//             activity
//         })
        
//     }
//     catch (error) {
//         res.status(404).json({
//             error
//         })
    
//     }
// }

// module.exports = createActivity;
const jwt = require('jsonwebtoken');

const createActivity = async (req, res, next) => {
    try {
        const token = req.headers['access-token']
        const payload = jwt.decode(token)
        const user = await models.User.findOne({
            where: {
                userName: payload.userName
            }
        })
        const activity = { ...req.body, userId: user.id }
        const act = await models.Task.create(activity)
        res.status(200).json({
            act
        })
    }
    catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}
module.exports = createActivity;
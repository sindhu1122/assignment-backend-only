const models = require('../models')
var jwt = require('jsonwebtoken')

const getActivitiesByDate = async (req, res, next) => {
    try {
        const token = req.headers['access-token']
        const payload = jwt.decode(token)
        const user = await models.User.findOne({
            where: {
                userName: payload.userName
            }
        })
        const data = await models.Task.findAll({
            where: {
                userId: user.id,
                startDate:req.params.startDate,
            }
        })
        res.status(200).json({
            data
        })
    }
    catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}
module.exports = getActivitiesByDate;
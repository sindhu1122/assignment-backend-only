const models = require('../models')
var jwt = require('jsonwebtoken')
var moment=require('moment')
const { Op } = require('sequelize')
const report = async (req, res, next) => {
    try {
        const token = req.headers['access-token']
        const payload = jwt.decode(token)
        const user = await models.User.findOne({
            where: {
                userName: payload.userName
            }
        });
        const data = await models.Task.findAll({
            where: {
                userId:user.id,
                startDate:{
                    [Op.gte]: moment().subtract(7, 'days').toDate()
                }
            }
        })
        console.log(moment().subtract(1,'days').toDate())
        let j=0
        let result=[]
        let diff,dur
        for(j=0;j<7;j++)
        {
            let tas=0
            dur=0
            dat=moment().subtract(j,'days').toDate()
            
            for(let i in data)
            {
                if(moment(data[i].startDate).format('L')===moment(dat).format('L')&&data[i].endTime!==null)
                {
                    tas++
                    diff=moment.utc(moment(data[i].endTime,"HH:mm:ss").diff(moment(data[i].startTime,"HH:mm:ss")))
                    dur=dur+diff
                }

            }
            result.push({
                date:moment(dat).format('L'),
                tasks:tas,
                duration:moment.utc(dur).format('HH:mm:ss')
            })
    }
        console.log(result)
    
         if(data)
         {
        res.status(200).json({
            result
        })
    }
    }
    
    catch (error) {
        res.status(400).json({
            status: false,
            error,
        })
    }
}
module.exports = report;
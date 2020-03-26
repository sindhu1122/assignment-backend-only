const models=require('../models');

// async function getActivity(req,res,next){
// try{
//         const user=await models.Activity.findAll({
//             where:{
//                 userId:req.params.userId 
//             }
//         })
//         res.status(200).json({
//             user
//         })
// }
// catch(err)
// {
//     next(err);
    
// }

// }


// module.exports= getActivity;
var jwt = require('jsonwebtoken')

const getActivities = async (req, res, next) => {
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
                userId: user.id
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
module.exports = getActivities;
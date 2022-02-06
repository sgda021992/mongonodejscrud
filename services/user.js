const { process_params } = require('express/lib/router');
const Users = require('../model/user')

exports.getUsers = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await Users.find({}).exec();
            resolve(result)
        } catch (error) {
            reject(error);
        }
    })
}

exports.createUpdateUsers = async (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const param = req.body;
            if (!param.id) {
                const user = new Users({
                    firstName: param.firstName,
                    lastName: param.lastName,
                    mobile: param.mobile,
                    email: param.email,
                    address1: param.address1,
                    city: param.city,
                    state: param.state,
                    country: param.country
                });
                const result = await user.save();
                resolve(result)
            } else {
                const updateRes = await Users.findByIdAndUpdate(param.id, { "$set": param }, { new: true }).lean();
                resolve(updateRes);
            }
        } catch (error) {
            reject(error);
        }
    })
}

exports.deleteUsers = async (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const id = req.param.id;
            const result = Users.findByIdAndDelete(id).exec();
            resolve(result);
        } catch (error) {
            reject(error);
        }
    })
}
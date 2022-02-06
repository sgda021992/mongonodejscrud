const userService = require('../services/user')

const getUsers = async (req, res) => {
    try {
        const result = await userService.getUsers();
        return res.status(200).json({ status: true, message: result })
    } catch (error) {
        return res.status(400).json({ status: false, message: 'Server error! We will look into this' });
    }
}

const createUsers = async (req, res) => {
    try {
        const result = await userService.createUpdateUsers(req);
        return res.status(200).json({ status: true, message: result })
    } catch (error) {
        return res.status(400).json({ status: false, message: 'Server error! We will look into this' });
    }
}

const updateUsers = async (req, res) => {
    try {
        const result = await userService.createUpdateUsers(req);
        return res.status(200).json({ status: true, message: result })
    } catch (error) {
        return res.status(400).json({ status: false, message: 'Server error! We will look into this' });
    }
}

const deleteUsers = async (req, res) => {
    try {
        const result = await userService.deleteUsers(req);
        return res.status(200).json({ status: true, message: result })
    } catch (error) {
        return res.status(400).json({ status: false, message: 'Server error! We will look into this' });
    }
}

module.exports = {
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
}

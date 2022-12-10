const questionModel = require('../models/Question');

const getItems = async (req, res) => {

    const data = await questionModel.find();
    return res.status(200)
        .json({ data });
}

module.exports = {
    getItems
}
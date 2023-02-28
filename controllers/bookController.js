const {Books} = require('../models')

module.exports.viewAll = async function (req, res) {
    const Books = await Book.findAll();
    res.render('Book/view_all', {Books});
}
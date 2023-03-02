const {Book} = require('../models');
const genres = ['Historical Fiction', 'Science Fiction', 'Fantasy', 'Non Fiction'].sort;

module.exports.viewAll = async function (req, res) {
    const books = await Book.findAll();
    res.render('book/view_all', {books});
}

module.exports.viewProfile = async function(req,res){
    const book = await Book.findByPk(req.params.id);
    res.render('book/profile', {book})
}

module.exports.renderEditForm = async function(req, res){
    const book = await Book.findByPk(req.params.id);
    res.render('book/edit', {book, genres});
}

module.exports.updateBook = async function(req,res){
    const book = await Book.update({
        publisher: req.body.publisher,
        genre: req.body.genre,
        pages: req.body.pages,
        image: req.body.image,
        description: req.body.description,
        title: req.body.title
    }, {
        where: {
            id: req.params.id
        }
    });
    res.redirect(`/books/profile/${req.params.id}`);
}

module.exports.renderAddForm = function(req,res){
    const book = {
        publisher: '',
        genre: genres[0],
        pages: 0,
        image: '',
        description: '',
        title: ''
    }
    res.render('book/add', {book, genres});
}

module.exports.addBook = async function(req,res){
    const book = await Book.create({
        publisher: req.body.publisher,
        genre: req.body.genre,
        pages: req.body.pages,
        image: req.body.image,
        description: req.body.description,
        title: req.body.title
    })
    res.redirect(`/books/profile/${book.id}`);
}
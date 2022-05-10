'user strict';
var dbConn = require('./../../config/db.config');

//book object create
var book = function (book) {
    this.title = book.title;
    this.description = book.description;
    this.email = book.email;
    this.phone = book.phone;
    this.cover_image = book.cover_image;
    this.author = book.author;
    this.price = book.price;
    this.status = book.status ? book.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
};
book.create = function (newBook, result) {
    dbConn.query("INSERT INTO books set ?", newBook, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
book.findById = function (id, result) {
    dbConn.query("Select * from books where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
book.findAll = function (result) {
    dbConn.query("Select * from books", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('books : ', res);
            result(null, res);
        }
    });
};
book.update = function (id, book, result) {
    dbConn.query("UPDATE books SET title=?,description=?,email=?,phone=?,cover_image=?,author=?,price=? WHERE id = ?", [book.title, book.description, book.email, book.phone, book.cover_image, book.author, book.price, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
book.delete = function (id, result) {
    dbConn.query("DELETE FROM books WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = book;
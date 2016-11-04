var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app');

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model('Cat', catSchema);

// var georage = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// georage.save(function (err, cat) {
//     if(err) {
//         console.log('something went wrong')
//     } else {
//         console.log('we just saved the cat to the db');
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function (err, cat) {
    if(err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});


// get all cats from the DB and console.log each one

Cat.find({}, function (err, cats) {
    if(err) {
        console.log(err);
    } else {
        console.log(cats);
    }
});
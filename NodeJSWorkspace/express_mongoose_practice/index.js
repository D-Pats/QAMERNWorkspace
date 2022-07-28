const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.listen(4040);

mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/movies', { useNewUrlParser: true }).then(() => { console.log('connection ready') }, (err) => { console.log("handle erros") });

const Schema = mongoose.Schema;

const actorSchema = new Schema({
    actorInfo: {
        name: String,
        age: Number
    }
})
const movieSchema = new Schema({
    movie: {
        title: String,
        description: String,
        releaseYear: Number,
        rating: Number
    }
    // actors: [actorSchema]
});

const movie = mongoose.model('Movie', movieSchema)

const someMovie = new movie({
    movie: {
        title: 'Movie title',
        description: 'Movie Desc',
        releaseYear: 2022,
        rating: 8.5
    }
    // actors: [{
    //     name: 'Actor Name',
    //     age: 25
    // }]
});

// Save returns a promise
someMovie.save().then(() => console.log('complete'));

app.get('/getAll', (req, res) => res.send(console.log(movie.find(
    (err, movs) => {           // callback when complete / error
        if (err) {
            console.error('An error occurred:', err);
        } else {
            movs.forEach((mov) => console.log(mov));
        }
    }


))));
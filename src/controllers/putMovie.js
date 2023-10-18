//`http://localhost:3001/Nonflix/movies/update/${id}`

const { Movie } = require('../db')


const putMovie = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);

        // const fieldsToUpdate = ['title', 'duration', 'trailer', 'description', 'year', 'language', 'torrent', 'disabled', 'image']
        // const uptadateData = {};

        // for(const field of fieldsToUpdate) {
        //     if(req.body[field] !== undefined) {
        //         uptadateData[field] = req.body[field];
        //     }
        // }

        const movie = await Movie.findByPk(id);
        console.log(movie);
        await movie.update(req.body);
        

        

        res.status(200).json(movie)

    } catch (error) {
        res.status(400).json(error.message)        
    }
};

module.exports = { putMovie }
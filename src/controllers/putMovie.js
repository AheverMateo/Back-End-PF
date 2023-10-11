//http://localhost:3001/Nonflix/movies/update

const { Movie } = require('../db')


const putMovie = async (req, res) => {
    try {
        const { id } = req.body
        const fieldsToUpdate = ['title', 'duration', 'trailer', 'description', 'year', 'language', 'torrent', 'disabled', 'image']
        const uptadateData = {};

        for(const field of fieldsToUpdate) {
            if(req.body[field] !== undefined) {
                uptadateData[field] = req.body[field];
            }
        }

        const movie = await Movie.findByPk(id);
        await movie.update(uptadateData);

        

        res.status(200).json(movie)

    } catch (error) {
        res.status(400).json(error.message)        
    }
};

module.exports = { putMovie }
const
    Developer = require('../models/Developer'),
    utils = require('../utils');

module.exports = {

    async index(req, res) {

        const {
            latitude,
            longitude,
            technologies
        } = req.query;

        const developers = await Developer.find({
            technologies: {
                $in: utils.parseStringAsArray(technologies)
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000 // until 10km from geometry point passed
                }
            }
        });

        return res.json({
            developers
        });
    }
}
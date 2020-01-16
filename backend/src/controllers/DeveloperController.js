const
    axios = require('axios'),
    Developer = require('../models/Developer'),
    utils = require('../utils');

module.exports = {

    async index(req, res) {

        const developers = await Developer.find();

        return res.json(developers);
    },

    async store(req, res) {

        const {
            github_username,
            technologies,
            latitude,
            longitude
        } = req.body;

        let developer = await Developer.findOne({
            github_username
        });

        if (!developer) {

            const github_response = await axios.get(`https://api.github.com/users/${github_username}`);

            const {
                name = login, avatar_url, bio
            } = github_response.data;

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            developer = await Developer.create({
                name,
                github_username,
                bio,
                avatar_url,
                technologies: utils.parseStringAsArray(technologies),
                location
            });
        }

        return res.json(developer);
    },

    async update(req, res) {},

    async destroy(req, res) {}
}
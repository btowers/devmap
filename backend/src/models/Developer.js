const
    mongoose = require('mongoose'),
    PointSchema = require('./utils/Point');

const DeveloperSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    technologies: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Developer', DeveloperSchema);